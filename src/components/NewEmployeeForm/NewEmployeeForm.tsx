'use client'

import { SubmitHandler } from 'react-hook-form'

import { toast } from 'react-toastify'
import { Separator } from '@/components/ui/separator'
import { NewEmployeeValidationSchema } from './NewEmployeeFormSchema'
import { updateEmployees } from '@/services/client/updateEmployees'
import { formatSendedObject } from '@/utils/formatSendedObject'
import FormHeader from '../Form/FormHeader'
import { PersonIcon, PlusIcon } from '@radix-ui/react-icons'
import FormWrapper from '../Form/FormWrapper'
import FormInputs from '../Form/FormInputs'
import { useConfigForms } from '@/hooks/useConfigForms'

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
  const { disabled, handleSubmit, register, reset } = useConfigForms()

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
