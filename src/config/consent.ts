export type ConsentServiceId = 'analytics' | 'interactiveMap' | 'video'

export type ConsentServiceDefinition = {
  id: ConsentServiceId
  provider: string
  privacyPolicyUrl: string
}

/**
 * Optional services must be registered here before their scripts, iframes,
 * images, fonts, map tiles or other network resources may load.
 *
 * The first release deliberately has no optional services. Direct links to
 * external providers are links only and do not load their resources in-page.
 */
export const optionalConsentServices: readonly ConsentServiceDefinition[] = []

export const hasOptionalConsentServices = optionalConsentServices.length > 0

export const localPreferenceKeys = [
  'sprachoase-language',
  'sprachoase-theme',
  'sprachoase-accessibility',
] as const
