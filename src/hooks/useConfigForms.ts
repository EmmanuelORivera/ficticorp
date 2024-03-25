import NewEmployeeFormSchema, {
  NewEmployeeValidationSchema,
} from '@/components/NewEmployeeForm/NewEmployeeFormSchema'
import isObjectEmpty from '@/utils/isObjectEmpty'
import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

export const useConfigForms = () => {
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

  return {
    register,
    handleSubmit,
    reset,
    disabled,
  }
}
