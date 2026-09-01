import { mkdir, readFile, rm, writeFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import { pathToFileURL } from 'node:url'

const projectRoot = process.cwd()
const distDirectory = resolve(projectRoot, 'dist')
const serverEntry = resolve(projectRoot, '.prerender/entry-server.js')
const templatePath = resolve(distDirectory, 'index.html')
const siteUrl = 'https://sprachoase-pusteblume.de'
const robotsContent = process.env.VITE_ROBOTS_CONTENT ?? 'index,follow'

const routes = {
  de: {
    output: templatePath,
    url: `${siteUrl}/`,
    locale: 'de_DE',
    alternateLocales: ['en_GB', 'tr_TR'],
  },
  en: {
    output: resolve(distDirectory, 'en/index.html'),
    url: `${siteUrl}/en/`,
    locale: 'en_GB',
    alternateLocales: ['de_DE', 'tr_TR'],
  },
  tr: {
    output: resolve(distDirectory, 'tr/index.html'),
    url: `${siteUrl}/tr/`,
    locale: 'tr_TR',
    alternateLocales: ['de_DE', 'en_GB'],
  },
}

function escapeAttribute(value) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('"', '&quot;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
}

function replaceMeta(html, selector, value) {
  const escapedValue = escapeAttribute(value)
  const pattern = new RegExp(
    `(<meta\\s+${selector.replace(/[.*+?^${}()|[\\]\\]/g, '\\$&')}\\s+content=")[^"]*("\\s*/?>)`,
  )

  if (!pattern.test(html)) {
    throw new Error(`Missing metadata selector: ${selector}`)
  }

  return html.replace(pattern, `$1${escapedValue}$2`)
}

function replaceLink(html, selector, value) {
  const escapedValue = escapeAttribute(value)
  const pattern = new RegExp(
    `(<link\\s+${selector.replace(/[.*+?^${}()|[\\]\\]/g, '\\$&')}\\s+href=")[^"]*("\\s*/?>)`,
  )

  if (!pattern.test(html)) {
    throw new Error(`Missing link selector: ${selector}`)
  }

  return html.replace(pattern, `$1${escapedValue}$2`)
}

function replaceAlternateLocales(html, locales) {
  const pattern =
    /<meta\s+property="og:locale:alternate"\s+content="[^"]*"\s*\/?>/g
  const tags = locales
    .map(
      (locale) =>
        `<meta property="og:locale:alternate" content="${escapeAttribute(locale)}" />`,
    )
    .join('\n    ')
  let inserted = false

  return html.replace(pattern, () => {
    if (inserted) {
      return ''
    }

    inserted = true
    return tags
  })
}

function createDocument(template, language, route, result) {
  let html = template
    .replace('<html lang="de">', `<html lang="${language}">`)
    .replace(/<title>.*?<\/title>/s, `<title>${result.title}</title>`)
    .replace(
      '<div id="root"></div>',
      `<div id="root" data-prerendered="true">${result.html}</div>`,
    )

  html = replaceMeta(html, 'name="description"', result.description)
  html = replaceMeta(html, 'name="robots"', robotsContent)
  html = replaceMeta(html, 'property="og:title"', result.title)
  html = replaceMeta(html, 'property="og:description"', result.description)
  html = replaceMeta(html, 'property="og:url"', route.url)
  html = replaceMeta(html, 'property="og:locale"', route.locale)
  html = replaceAlternateLocales(html, route.alternateLocales)
  html = replaceMeta(html, 'property="og:image:alt"', result.imageAlt)
  html = replaceMeta(html, 'name="twitter:title"', result.title)
  html = replaceMeta(html, 'name="twitter:description"', result.description)
  html = replaceLink(html, 'rel="canonical"', route.url)

  if (!html.includes('data-prerendered="true"')) {
    throw new Error(`Prerender root injection failed for ${language}`)
  }

  return html
}

const template = await readFile(templatePath, 'utf8')
const { render } = await import(pathToFileURL(serverEntry).href)

for (const [language, route] of Object.entries(routes)) {
  const result = await render(language)
  const document = createDocument(template, language, route, result)

  await mkdir(resolve(route.output, '..'), { recursive: true })
  await writeFile(route.output, document)
}

if (robotsContent.includes('noindex')) {
  await writeFile(
    resolve(distDirectory, 'robots.txt'),
    'User-agent: *\nDisallow: /\n',
  )
}

await rm(resolve(projectRoot, '.prerender'), {
  recursive: true,
  force: true,
})
