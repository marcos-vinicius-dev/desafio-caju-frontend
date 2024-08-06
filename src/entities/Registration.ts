export enum Status {
  REPROVED = 'REPROVED',
  APPROVED = 'APPROVED',
  REVIEW = 'REVIEW',
}

export default interface Registration {
  id: string
  admissionDate: string
  email: string
  employeeName: string
  status: Status
  cpf: string
}
