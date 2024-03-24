'use client'

import { useEffect } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'

import { toast } from 'react-toastify'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import InputWrapper from './InputWrapper'
import { PersonIcon, PlusIcon } from '@radix-ui/react-icons'
import { Button } from '@/components/ui/button'
import NewEmployeeFormSchema, {
  NewEmployeeValidationSchema,
} from './NewEmployeeFormSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import isObjectEmpty from '@/utils/isObjectEmpty'
import { updateEmployees } from '@/services/client/updateEmployees'
import { formatSendedObject } from '@/utils/formatSendedObject'

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
    console.log(data)

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
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-xl mx-auto border p-4 rounded"
    >
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-medium flex items-center gap-4">
          <PersonIcon height={20} width={20} /> Nuevo Empleado
        </h2>
        <Button variant={'outline'} type="submit" disabled={disabled}>
          Crear
          <PlusIcon className="ml-1" />
        </Button>
      </div>
      <Separator className="my-4" />

      <InputWrapper>
        <Label htmlFor="name">Nombre</Label>
        <Input
          {...register('name')}
          className="mt-1"
          id="name"
          name="name"
          type="text"
        />
      </InputWrapper>

      <InputWrapper>
        <Label htmlFor="lastName">Apellido Paterno</Label>
        <Input
          {...register('lastName')}
          className="mt-1"
          id="lastName"
          name="lastName"
          type="text"
        />
      </InputWrapper>

      <InputWrapper>
        <Label htmlFor="surName">Apellido Materno</Label>
        <Input
          {...register('surName')}
          className="mt-1"
          id="surName"
          name="surName"
          type="text"
        />
      </InputWrapper>

      <InputWrapper>
        <Label htmlFor="email">Correo Electronico</Label>
        <Input
          {...register('email')}
          className="mt-1"
          id="email"
          name="email"
          type="email"
        />
      </InputWrapper>

      <InputWrapper>
        <Label htmlFor="phone">Telefono</Label>
        <Input
          {...register('phone')}
          className="mt-1"
          id="phone"
          name="phone"
          type="number"
        />
      </InputWrapper>

      <InputWrapper>
        <Label htmlFor="job">Puesto</Label>
        <Input
          {...register('job')}
          className="mt-1"
          id="job"
          name="job"
          type="text"
        />
      </InputWrapper>

      <InputWrapper>
        <Label htmlFor="area">Area</Label>
        <Input
          {...register('area')}
          className="mt-1"
          id="area"
          name="area"
          type="text"
        />
      </InputWrapper>

      <InputWrapper>
        <Label htmlFor="salary">Sueldo</Label>
        <Input
          {...register('salary')}
          className="mt-1"
          id="salary"
          name="salary"
          type="number"
          min={0}
        />
      </InputWrapper>
    </form>
  )
}

export default NewEmployeeForm
