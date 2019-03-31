import React from 'react'

export const feelings = feeling => {
  let _feeling = feeling

  if (_feeling === 'happy') {
    _feeling = 'smile'
  }

  return <i className={`far fa-${_feeling}`} />
}

export const weathers = weather => {
  let _weather = weather

  if (_weather === 'sunny') {
    _weather = 'sun'
  }

  return <i className={`far fa-${_weather}`} />
}
