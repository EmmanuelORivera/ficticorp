'use client'

import { useEffect } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'

import { toast } from 'react-toastify'
import { Separator } from '@/components/ui/separator'
import NewEmployeeFormSchema, {
  NewEmployeeValidationSchema,
} from './NewEmployeeFormSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import isObjectEmpty from '@/utils/isObjectEmpty'
import { updateEmployees } from '@/services/client/updateEmployees'
import { formatSendedObject } from '@/utils/formatSendedObject'
import FormHeader from '../Form/FormHeader'
import { PersonIcon, PlusIcon } from '@radix-ui/react-icons'
import FormWrapper from '../Form/FormWrapper'
import FormInputs from '../Form/FormInputs'

const renderHeader = () => (
  <>
    <PersonIcon height={20} width={20} /> Nuevo Empleado
  </>
)
const renderButtonBody = () => (
  <>
    Crear
    <PlusIcon className="ml-1" />
  </>
)

const NewEmployeeForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { disabled, errors },
  } = useForm<NewEmployeeValidationSchema>({
    resolver: zodResolver(NewEmployeeFormSchema),
  })

  useEffect(() => {
    if (isObjectEmpty(errors)) {
      return
    }
    const errorKeys = Object.keys(errors)
    // @ts-ignore
    toast.error(errors[errorKeys[0]].message)
  }, [errors])

  const onSubmit: SubmitHandler<NewEmployeeValidationSchema> = async (data) => {
    try {
      const employee = formatSendedObject(data)
      updateEmployees(employee)

      toast.success('El empleado ha sido registrado con exito!!')
    } catch (error) {
      console.error(error)
    }

    reset()
  }

  return (
    <FormWrapper handleSubmit={() => handleSubmit(onSubmit)}>
      <FormHeader
        renderHeader={renderHeader}
        renderButtonBody={renderButtonBody}
        disabled={disabled}
      />
      <Separator className="my-4" />
      <FormInputs register={register} />
    </FormWrapper>
  )
}

export default NewEmployeeForm
