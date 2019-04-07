export const checkEmail = email => {
  const regEmail = /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/

  return regEmail.test(email)
}

export const arrayLength = arr => {
  return arr.length > 0
}

export const checkArrayValueByKey = (arr, key) => {
  return arr.every(arrVal => arrVal[key])
}

export const numberWithHyphenValidation = num => {
  const regNum = /^[0-9-]*$/

  return regNum.test(num)
}

export const numberValidation = num => {
  const regNum = /^[0-9]*$/

  return regNum.test(num)
}

export const phoneValidation = phone => {
  const regPhone = /(^02.{0}|^01.{1}|[0-9]{3})([0-9]+)([0-9]{4})/g

  return regPhone.test(phone)
}

export const passwordValidation = password => {
  // 8자 이상 특문 포함 정규식
  const regPassword = /^(?=.*?[^a-z0-9]).{8,}$/i

  return regPassword.test(password)
}

export const birthDayValidation = birthDay => {
  // 생년월일 정규식
  const birthDayReg = /^(?:[0-9]{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[1,2][0-9]|3[0,1]))/

  return birthDayReg.test(birthDay)
}

export const birthDayAfterValidation = birthDayAfter => {
  // 주민번호 뒷자리 정규식
  const birthDayAfterReg = /[1-4][0-9]{6}$/

  return birthDayAfterReg.test(birthDayAfter)
}
