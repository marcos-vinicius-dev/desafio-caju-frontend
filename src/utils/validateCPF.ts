export const clearCPF = (cpf: string) => cpf.replace(/\D+/g, '')

export const validateCPF = (cpf: string) => {
  const cleanedCPF = clearCPF(cpf)

  if (cleanedCPF.length !== 11) return false

  if (/^(\d)\1{10}$/.test(cleanedCPF)) return false

  let sum = 0

  for (let i = 0; i < 9; i++) {
    sum += parseInt(cleanedCPF.charAt(i), 10) * (10 - i)
  }

  let firstDigit = 11 - (sum % 11)
  firstDigit = firstDigit >= 10 ? 0 : firstDigit

  if (firstDigit !== parseInt(cleanedCPF.charAt(9), 10)) return false

  sum = 0

  for (let i = 0; i < 10; i++) {
    sum += parseInt(cleanedCPF.charAt(i), 10) * (11 - i)
  }

  let secondDigit = 11 - (sum % 11)
  secondDigit = secondDigit >= 10 ? 0 : secondDigit

  return secondDigit === parseInt(cleanedCPF.charAt(10), 10)
}
