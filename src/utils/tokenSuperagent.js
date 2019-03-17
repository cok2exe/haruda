import superagentDefaults from 'superagent-defaults'

import config from '@/config'

import { getTokenFromLocalStorage } from './localStorage'

const superagent = superagentDefaults()
const requestType = {
  init: () => superagent.set(config.header.token, getTokenFromLocalStorage()),
  delete: url => requestType.init().delete(url),
  get: url => requestType.init().get(url),
  post: url => requestType.init().post(url),
  put: url => requestType.init().put(url)
}

const request = (method, url) => {
  return requestType[method.toLowerCase()](url)
}

export default request
