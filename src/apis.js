import config from './config'

const API_PATH = `${config.api.host}:${config.api.port}/${config.api.prefix}/${
  config.api.version
}`

export default {
  FILES: {
    UPLOAD_IMAGE: {
      METHOD: 'POST',
      PATH: () => `${API_PATH}/files/upload/image`
    }
  },

  AUTH: {
    AUTH_TOKEN: {
      method: 'POST',
      path: () => `${API_PATH}/auth-token`
    },
    LOGIN: {
      method: 'POST',
      path: () => `${API_PATH}/login`
    },
    SIGNUP: {
      method: 'POST',
      path: () => `${API_PATH}/signup`
    },
    FIND_PASSWORD: {
      method: 'POST',
      path: () => `${API_PATH}/find-password`
    }
  },

  USERS: {
    PASSWORD: {
      method: 'PUT',
      path: () => `${API_PATH}/users/password`
    }
  }
}
