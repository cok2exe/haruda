export default option => {
  const { page, pageSize, count } = option

  let numberOfPages = 1
  if (count) {
    numberOfPages = Math.ceil(+count / +pageSize)
  }

  return {
    page,
    numberOfPages,
    count
  }
}
