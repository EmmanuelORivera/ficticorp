import { v4 as uuidv4 } from 'uuid'
import { NewEmployeeValidationSchema } from '@/components/NewEmployeeForm/NewEmployeeFormSchema'

export const formatSendedObject = (employee: NewEmployeeValidationSchema) => {
  const objectSend = {
    ID: uuidv4(),
    Nombre: employee.name,
    'Apellido Paterno': employee.lastName,
    'Apellido Materno': employee.surName,
    'Correo Electronico': employee.email,
    Telefono: employee.phone,
    Puesto: employee.job,
    Area: employee.area,
    Sueldo: employee.salary,
  }

  return objectSend
}
