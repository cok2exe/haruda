import config from './config'

const API_PATH = `${config.api.host}/${config.api.port}/${config.api.prefix}/${
  config.api.version
}`

export default {
  AUTH: {
    LOGIN: {
      method: 'POST',
      path: () => `${API_PATH}/login`
    },
    SIGNUP: {
      method: 'POST',
      path: () => `${API_PATH}/signup`
    }
  }
}
