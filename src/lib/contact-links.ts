type MailtoOptions = {
  body: string
  email: string
  subject: string
}

export function createMailtoHref({ body, email, subject }: MailtoOptions) {
  return `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}
