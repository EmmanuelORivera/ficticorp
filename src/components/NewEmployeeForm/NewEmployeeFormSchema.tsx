import z from 'zod'
const MAX_CHARACTERS = 20
const MIN_CHARACTERS = 2

const NUMBER_PHONE_MAX = 10

const customCharacterMessage = (
  field: string,
  type: 'maximo' | 'minimo',
  numCharacters: number
) => `El ${field} debe tener un ${type} de ${numCharacters} caracteres`

const NewEmployeeFormSchema = z.object({
  name: z
    .string()
    .max(MAX_CHARACTERS, {
      message: customCharacterMessage('nombre', 'maximo', MAX_CHARACTERS),
    })
    .min(MIN_CHARACTERS, {
      message: customCharacterMessage('nombre', 'minimo', MIN_CHARACTERS),
    }),
  lastName: z
    .string()
    .max(MAX_CHARACTERS, {
      message: customCharacterMessage(
        'apellido paterno',
        'maximo',
        MAX_CHARACTERS
      ),
    })
    .min(MIN_CHARACTERS, {
      message: customCharacterMessage(
        'apellido paterno',
        'minimo',
        MIN_CHARACTERS
      ),
    }),
  surName: z
    .string()
    .max(MAX_CHARACTERS, {
      message: customCharacterMessage(
        'apellido materno',
        'maximo',
        MAX_CHARACTERS
      ),
    })
    .min(MIN_CHARACTERS, {
      message: customCharacterMessage(
        'apellido materno',
        'minimo',
        MIN_CHARACTERS
      ),
    }),
  email: z.string().email('Email no valido'),
  phone: z.string().regex(/^\d{10}$/, {
    message: 'El telefono tiene que ser de 10 digitos',
  }),
  job: z
    .string()
    .max(MAX_CHARACTERS, {
      message: customCharacterMessage('trabajo', 'maximo', MAX_CHARACTERS),
    })
    .min(MIN_CHARACTERS, {
      message: customCharacterMessage('trabajo', 'minimo', MIN_CHARACTERS),
    }),
  area: z
    .string()
    .max(MAX_CHARACTERS, {
      message: customCharacterMessage('area', 'maximo', MAX_CHARACTERS),
    })
    .min(MIN_CHARACTERS, {
      message: customCharacterMessage('area', 'minimo', MIN_CHARACTERS),
    }),
  salary: z.coerce
    .number()
    .gt(0, { message: 'El sueldo tiene que ser mayor que 0' }),
})

export default NewEmployeeFormSchema
export type NewEmployeeValidationSchema = z.infer<typeof NewEmployeeFormSchema>
