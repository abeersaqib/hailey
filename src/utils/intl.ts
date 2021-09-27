import { createIntl, createIntlCache } from '@formatjs/intl'

// This is optional but highly recommended
// since it prevents memory leak
const cache = createIntlCache()

const intl = createIntl(
  {
    locale: window.navigator.language || 'en-US',
    messages: {},
  },
  cache
)

export default intl
