'use client'

import FormHeader from '@/components/Form/FormHeader'
import FormInputs from '@/components/Form/FormInputs'
import FormWrapper from '@/components/Form/FormWrapper'
import { NewEmployeeValidationSchema } from '@/components/NewEmployeeForm/NewEmployeeFormSchema'
import { Separator } from '@/components/ui/separator'
import { useConfigForms } from '@/hooks/useConfigForms'
import { Pencil1Icon } from '@radix-ui/react-icons'
import { useEffect, useState } from 'react'
import { SubmitHandler } from 'react-hook-form'
import { toast } from 'react-toastify'

interface Employee {
  ID: string
  Nombre: string
  'Apellido Paterno': string
  'Apellido Materno': string
  'Correo Electronico': string
  Telefono: string
  Puesto: string
  Area: string
  Sueldo: number
}

type EmployeeWithoutID = Omit<Employee, 'ID'>

const renderHeader = () => <div>Editar Empleado</div>

const renderButtonBody = () => (
  <div className="flex items-center justify-center">
    <Pencil1Icon className="mr-2" height={14} width={14} />
    Editar
  </div>
)

const EditEmployeeForm = ({ id }: { id: string }) => {
  const { disabled, handleSubmit, register, setValue } = useConfigForms()
  const [employee, setEmployee] = useState<undefined | Employee>(undefined)

  useEffect(() => {
    const fetchEmployee = async () => {
      const response = await fetch(
        `https://sheet.best/api/sheets/10fe5e17-207b-4749-8c6c-e8473f871a26/query?ID=__eq(${id})`
      )

      const data = await response.json()

      setEmployee(data[0])
    }

    fetchEmployee()
  }, [])

  useEffect(() => {
    if (!employee) return

    setValue('name', employee.Nombre)
    setValue('lastName', employee['Apellido Paterno'])
    setValue('surName', employee['Apellido Materno'])
    setValue('email', employee['Correo Electronico'])
    setValue('phone', employee.Telefono)
    setValue('job', employee.Puesto)
    setValue('area', employee.Area)
    setValue('salary', employee.Sueldo)
  }, [employee])

  const onSubmit: SubmitHandler<NewEmployeeValidationSchema> = async (data) => {
    const employeeFormatted: EmployeeWithoutID = {
      Nombre: data.name,
      'Apellido Paterno': data.lastName,
      'Apellido Materno': data.surName,
      'Correo Electronico': data.email,
      Telefono: data.phone,
      Puesto: data.job,
      Area: data.area,
      Sueldo: data.salary,
    }
    try {
      await fetch(
        `https://sheet.best/api/sheets/10fe5e17-207b-4749-8c6c-e8473f871a26/ID/*${id}*`,
        {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(employeeFormatted),
        }
      )

      toast.success('Se ha modificado el usuario exitosamente!!')
    } catch (error) {
      console.error(error)
    }
  }

  const renderForm = () => {
    if (!employee) {
      return <p>No existe empleado con ese ID</p>
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
  //Here is rendering the component
  return renderForm()
}

export default EditEmployeeForm
