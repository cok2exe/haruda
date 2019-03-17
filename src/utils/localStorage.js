import config from '../config'

export const getTokenFromLocalStorage = () => {
  return window.localStorage.getItem(config.tokenName)
}

export const setTokenFromLocalStorage = token => {
  return window.localStorage.setItem(config.tokenName, token)
}

export const removeTokenFromLocalStorage = () => {
  return window.localStorage.removeItem(config.tokenName)
}
