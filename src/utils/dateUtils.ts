export const formatDate = (
  date: Date,
  format: string = 'dd/MM/yyyy'
): string => {
  const day = String(date.getDate()).padStart(2, '0')
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const year = String(date.getFullYear())

  return format.replace('dd', day).replace('MM', month).replace('yyyy', year)
}
