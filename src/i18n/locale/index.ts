import { en } from './en.json'
import { he } from './he.json'

declare module 'i18next' {
  // Extend CustomTypeOptions
  interface CustomTypeOptions {
    resources: {
      en: typeof en
      he: typeof he
    }
  }
}

export default {
  en: { translation: en },
  he: { translation: he },
}
