import React from 'react'
import InputWrapper from '../NewEmployeeForm/InputWrapper'
import { Label } from '@radix-ui/react-label'
import { Input } from '../ui/input'
import { UseFormRegister } from 'react-hook-form'

const FormInputs = ({
  register,
}: {
  register: UseFormRegister<{
    area: string
    name: string
    email: string
    lastName: string
    surName: string
    phone: string
    job: string
    salary: number
  }>
}) => {
  return (
    <>
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
          step="any"
        />
      </InputWrapper>
    </>
  )
}

export default FormInputs
