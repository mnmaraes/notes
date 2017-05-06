// @flow
import apisauce from 'apisauce'

export default function (baseURL: string, options: Object, transform?: (requests: Object) => void) {
  const api = apisauce.create({
    baseURL,
    ...options
  })

  if (transform !== null && transform !== undefined) {
    api.addRequestTransform(transform)
  }

  return api
}
