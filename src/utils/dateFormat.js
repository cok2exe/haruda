import dateFns from 'date-fns'

export default date => {
  return dateFns.format(new Date(date), 'YYYY-MM-DD HH:mm')
}
