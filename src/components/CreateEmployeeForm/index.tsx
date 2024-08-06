import { useForm, Controller, SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import TextField from '~/components/ui/TextField'
import * as S from './styles'
import Button from '~/components/ui/Buttons'

import { z } from 'zod'
import { clearCPF, validateCPF } from '~/utils/validateCPF'
import AxiosAdapter from '~/infra/http/AxiosAdapter'
import RegistrationsGatewayHttp from '~/infra/gateway/RegistrationsGatewayHttp'
import CreateRegistration from '~/usecases/CreateRegistration'
import { formatDate } from '~/utils/dateUtils'
import Registration, { Status } from '~/entities/Registration'
import EmployeeFormData from '~/entities/Employee'
import { useNavigate } from 'react-router-dom'
import routes from '~/router/routes'
import { cpfMask } from '~/utils/masks'

export const userSchema = z.object({
  name: z
    .string()
    .min(1, 'Nome é obrigatório')
    .refine((name) => !/^\d/.test(name), {
      message: 'O nome não pode começar com um número.',
    })
    .refine((name) => /\s+/.test(name), {
      message:
        'O nome deve conter pelo menos um sobrenome, separado por espaço.',
    })
    .refine(
      (name) => name.split(' ').every((component) => component.length >= 2),
      {
        message: 'Cada parte do nome deve ter pelo menos duas letras.',
      }
    ),
  email: z.string().email('E-mail inválido'),
  cpf: z
    .string()
    .min(1, 'CPF é obrigatório')
    .refine((cpf) => validateCPF(cpf), {
      message: 'CPF inválido',
    }),
  admissionDate: z.string().min(1, 'Data de admissão é obrigatória'),
})

const CreateEmployeeForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<EmployeeFormData>({
    resolver: zodResolver(userSchema),
    defaultValues: {
      name: '',
      email: '',
      cpf: '',
      admissionDate: '',
    },
  })

  const navigate = useNavigate()

  const goToHome = () => navigate(routes.dashboard)

  const onSubmit: SubmitHandler<EmployeeFormData> = async (data) => {
    const transformedData: Registration = {
      admissionDate: formatDate(new Date(data.admissionDate)),
      email: data.email,
      employeeName: data.name,
      status: Status.REVIEW,
      cpf: clearCPF(data.cpf),
    }

    try {
      const axiosAdapter = new AxiosAdapter()
      const registrationsGateway = new RegistrationsGatewayHttp(axiosAdapter)
      const createRegistration = new CreateRegistration(registrationsGateway)
      await createRegistration.execute(transformedData)

      goToHome()
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <S.Form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name='name'
        control={control}
        render={({ field }) => (
          <TextField
            label='Nome'
            placeholder='Digite seu nome completo'
            error={errors.name?.message}
            {...field}
          />
        )}
      />
      <Controller
        name='email'
        control={control}
        render={({ field }) => (
          <TextField
            label='E-mail'
            placeholder='Digite seu e-mail'
            error={errors.email?.message}
            {...field}
          />
        )}
      />
      <Controller
        name='cpf'
        control={control}
        render={({ field }) => (
          <TextField
            label='CPF'
            mask={cpfMask}
            placeholder='Digite seu CPF'
            error={errors.cpf?.message}
            {...field}
          />
        )}
      />
      <Controller
        name='admissionDate'
        control={control}
        render={({ field }) => (
          <TextField
            type='date'
            label='Data de Admissão'
            placeholder='Digite a data de admissão'
            error={errors.admissionDate?.message}
            {...field}
          />
        )}
      />
      <Button type='submit'>Cadastrar</Button>
    </S.Form>
  )
}

export default CreateEmployeeForm
