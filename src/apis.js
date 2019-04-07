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

  USER_DIARIES: {
    GET: {
      method: 'GET',
      path: () => `${API_PATH}/user-diaries`
    },
    CREATE: {
      method: 'POST',
      path: () => `${API_PATH}/user-diaries`
    },
    VALID_USER_DIARY: {
      method: 'POST',
      path: () => `${API_PATH}/user-diaries/valid`
    },
    DELETE: {
      method: 'DELETE',
      path: () => `${API_PATH}/user-diaries`
    }
  },

  USERS: {
    GET: {
      method: 'GET',
      path: () => `${API_PATH}/users`
    },
    UPDATE: {
      method: 'PUT',
      path: () => `${API_PATH}/users`
    },
    PASSWORD: {
      method: 'PUT',
      path: () => `${API_PATH}/users/password`
    }
  },

  DIARIES: {
    SEARCH_BY_ID: {
      method: 'GET',
      path: () => `${API_PATH}/diaries/search`
    },
    VALID_PASSWORD: {
      method: 'POST',
      path: () => `${API_PATH}/diaries/valid-password`
    }
  },

  QNAS: {
    GET: {
      method: 'GET',
      path: () => `${API_PATH}/qnas`
    },
    CREATE: {
      method: 'POST',
      path: () => `${API_PATH}/qnas`
    },
    UPDATE_BY_ID: {
      method: 'PUT',
      path: ({ id }) => `${API_PATH}/qnas/${id}`
    },
    DELETE_BY_ID: {
      method: 'DELETE',
      path: ({ id }) => `${API_PATH}/qnas/${id}`
    }
  },

  NOTICES: {
    GET: {
      method: 'GET',
      path: () => `${API_PATH}/notices`
    },
    GET_BY_ID: {
      method: 'GET',
      path: ({ id }) => `${API_PATH}/notices/${id}`
    }
  },

  DIARY_CONTENTS: {
    GET: {
      method: 'GET',
      path: () => `${API_PATH}/diary-contents`
    },
    GET_BY_ID: {
      method: 'GEt',
      path: ({ id }) => `${API_PATH}/diary-contents/${id}`
    }
  },

  DIARY_TODO_LIST: {
    GET: {
      method: 'GET',
      path: () => `${API_PATH}/diary-todo-lists`
    },
    CREATE: {
      method: 'POST',
      path: () => `${API_PATH}/diary-todo-lists`
    },
    UPDATE: {
      method: 'PUT',
      path: () => `${API_PATH}/diary-todo-lists`
    },
    DELETE_BY_ID: {
      method: 'DELETE',
      path: ({ id }) => `${API_PATH}/diary-todo-lists/${id}`
    }
  },

  DIARY_SCHEDULES: {
    GET: {
      method: 'GET',
      path: () => `${API_PATH}/diary-schedules`
    },
    CREATE: {
      method: 'POST',
      path: () => `${API_PATH}/diary-schedules`
    },
    UPDATE: {
      method: 'PUT',
      path: () => `${API_PATH}/diary-schedules`
    },
    DELETE_BY_ID: {
      method: 'DELETE',
      path: ({ id }) => `${API_PATH}/diary-schedules/${id}`
    }
  },

  ADMIN: {
    NOTICES: {
      GET: {
        method: 'GET',
        path: () => `${API_PATH}/admin/notices`
      },
      GET_BY_ID: {
        method: 'GET',
        path: ({ id }) => `${API_PATH}/admin/notices/${id}`
      },
      CREATE: {
        method: 'POST',
        path: () => `${API_PATH}/admin/notices`
      },
      UPDATE_BY_ID: {
        method: 'PUT',
        path: ({ id }) => `${API_PATH}/admin/notices/${id}`
      },
      DELETE_BY_ID: {
        method: 'DELETE',
        path: ({ id }) => `${API_PATH}/admin/notices/${id}`
      }
    }
  }
}
