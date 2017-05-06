// @flow
import createApi from './api'

const api = createApi(
  '/',
  {
    timeout: 10000
  }
)

// API Calls
const ping = (token: string) => api.post(
  '/ping',
  {
    data: 'ping'
  },
  {
    'headers': {
      'x-auth-token': token
    }
  }
)

export type BlueService = {
  // Auth Requests
  ping: typeof ping
}

export default {
  ping
}
