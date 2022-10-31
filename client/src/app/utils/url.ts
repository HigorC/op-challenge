export function setParameter(url: string = '', name: string = '', value: string = '') {
  if (!name || !value) return url

  const buildedUrl = new URL(url)
  buildedUrl.searchParams.set(name, value)

  return buildedUrl.href
}
