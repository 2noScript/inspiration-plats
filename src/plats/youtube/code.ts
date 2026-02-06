/**
 * YouTube UI language code
 * Based on IETF BCP 47 language tags (shortened / common YouTube usage)
 */

export type YoutubeLanguageCode =
  | 'en'      // English (Global)
  | 'en-US'   // English (United States)
  | 'en-GB'   // English (United Kingdom)

  | 'ko'      // Korean (한국어)
  | 'vi'      // Vietnamese (Tiếng Việt)
  | 'ja'      // Japanese (日本語)

  | 'zh'      // Chinese (generic)
  | 'zh-CN'   // Chinese Simplified (简体中文 - China)
  | 'zh-TW'   // Chinese Traditional (繁體中文 - Taiwan)
  | 'zh-HK'   // Chinese Traditional (Hong Kong)

  | 'fr'      // French (Français)
  | 'fr-CA'   // French (Canada)

  | 'de'      // German (Deutsch)
  | 'es'      // Spanish (Español)
  | 'es-ES'   // Spanish (Spain)
  | 'es-MX'   // Spanish (Mexico)

  | 'pt'      // Portuguese (generic)
  | 'pt-BR'   // Portuguese (Brazil)
  | 'pt-PT'   // Portuguese (Portugal)

  | 'ru'      // Russian (Русский)
  | 'id'      // Indonesian (Bahasa Indonesia)
  | 'th'      // Thai (ภาษาไทย)
  | 'hi'      // Hindi (हिन्दी)
  | 'ar'      // Arabic (العربية)
  | 'tr'      // Turkish (Türkçe)

  | 'it'      // Italian (Italiano)
  | 'nl'      // Dutch (Nederlands)
  | 'pl'      // Polish (Polski)
  | 'sv'      // Swedish (Svenska)
  | 'fi'      // Finnish (Suomi)
  | 'da'      // Danish (Dansk)
  | 'no'      // Norwegian (Norsk)
  | 'cs'      // Czech (Čeština)
  | 'hu'      // Hungarian (Magyar)
  | 'ro'      // Romanian (Română)
  | 'el'      // Greek (Ελληνικά)

  | 'he'      // Hebrew (עברית)
  | 'fa'      // Persian / Farsi (فارسی)
  | 'bn'      // Bengali (বাংলা)
  | 'ur'      // Urdu (اردو)
  | 'ta'      // Tamil (தமிழ்)
  | 'te'      // Telugu (తెలుగు)
  | 'ml'      // Malayalam (മലയാളം)
  | 'mr'      // Marathi (मराठी)

  | 'uk'      // Ukrainian (Українська)
  | 'bg'      // Bulgarian (Български)
  | 'sr'      // Serbian (Српски)
  | 'hr'      // Croatian (Hrvatski)
  | 'sk'      // Slovak (Slovenčina)
  | 'sl'      // Slovenian (Slovenščina)

/**
 * YouTube region / country code
 * Based on ISO 3166-1 alpha-2
 * Used to localize trending & search results
 */
export type YoutubeRegionCode =
  | 'US' // United States
  | 'KR' // South Korea (대한민국)
  | 'VN' // Vietnam (Việt Nam)
  | 'JP' // Japan (日本)
  | 'CN' // China (中国)
  | 'TW' // Taiwan (台灣)
  | 'HK' // Hong Kong (香港)

  | 'IN' // India (भारत)
  | 'TH' // Thailand (ประเทศไทย)
  | 'ID' // Indonesia
  | 'MY' // Malaysia
  | 'PH' // Philippines

  | 'FR' // France
  | 'DE' // Germany
  | 'GB' // United Kingdom
  | 'IT' // Italy
  | 'ES' // Spain
  | 'NL' // Netherlands
  | 'SE' // Sweden
  | 'NO' // Norway
  | 'FI' // Finland
  | 'DK' // Denmark

  | 'RU' // Russia
  | 'UA' // Ukraine
  | 'PL' // Poland
  | 'CZ' // Czech Republic
  | 'HU' // Hungary
  | 'RO' // Romania
  | 'BG' // Bulgaria

  | 'BR' // Brazil
  | 'AR' // Argentina
  | 'MX' // Mexico
  | 'CO' // Colombia
  | 'CL' // Chile

  | 'AU' // Australia
  | 'NZ' // New Zealand

  | 'ZA' // South Africa
  | 'EG' // Egypt
  | 'TR' // Turkey
