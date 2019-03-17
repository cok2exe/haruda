export const sortByKeyAsc = (array, key) => {
  return array.sort((a, b) => {
    const x = a[key]
    const y = b[key]
    return x < y ? -1 : x > y ? 1 : 0
  })
}

export const comma = num => {
  var len, point, str

  num = num + ''
  point = num.length % 3
  len = num.length

  str = num.substring(0, point)
  while (point < len) {
    if (str != '') str += ','
    str += num.substring(point, point + 3)
    point += 3
  }

  return str
}

export const asyncForEach = async function(array, callback) {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array)
  }
}
