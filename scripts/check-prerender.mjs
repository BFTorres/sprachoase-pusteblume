import { readFile } from 'node:fs/promises'
import { resolve } from 'node:path'

const checks = [
  {
    language: 'de',
    path: resolve('dist/index.html'),
    canonical: 'https://sprachoase-pusteblume.de/',
    heading: 'Englisch, das mit Kindern wächst.',
  },
  {
    language: 'en',
    path: resolve('dist/en/index.html'),
    canonical: 'https://sprachoase-pusteblume.de/en/',
    heading: 'English that grows with children.',
  },
  {
    language: 'tr',
    path: resolve('dist/tr/index.html'),
    canonical: 'https://sprachoase-pusteblume.de/tr/',
    heading: 'Çocuklarla birlikte büyüyen İngilizce.',
  },
]

for (const check of checks) {
  const html = await readFile(check.path, 'utf8')
  const requirements = [
    `lang="${check.language}"`,
    'data-prerendered="true"',
    `href="${check.canonical}"`,
    check.heading,
    'EducationalOrganization',
  ]

  for (const requirement of requirements) {
    if (!html.includes(requirement)) {
      throw new Error(`${check.path} is missing: ${requirement}`)
    }
  }

  if (html.includes('<div id="root"></div>')) {
    throw new Error(`${check.path} still contains an empty application root`)
  }
}

console.log('Prerendered German, English and Turkish documents are valid.')
