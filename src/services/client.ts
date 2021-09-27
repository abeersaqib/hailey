import { createClient } from '@urql/core'

export const client = createClient({
  url: 'http://localhost:8000/',
  fetchOptions: {
    mode: 'cors', // no-cors, cors, *same-origin
    credentials: 'same-origin',
  },
})
