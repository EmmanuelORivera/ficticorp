'use client'

import { useState, useEffect } from 'react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Button } from '../ui/button'
import { Cross1Icon } from '@radix-ui/react-icons'
import { EditIcon, PlusCircle } from 'lucide-react'
import Link from 'next/link'
import { deleteEmployee } from '@/services/client/deleteEmployee'
import { toast } from 'react-toastify'

const EmployeesTable = () => {
  const [employees, setEmployees] = useState<string[][]>([[]])

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        'https://sheet.best/api/sheets/10fe5e17-207b-4749-8c6c-e8473f871a26'
      )

      const fetchedData = await response.json()

      setEmployees(fetchedData)
    }

    fetchData()
  }, [])

  const handleDelete = async (employee: any) => {
    setEmployees((prev) => {
      return prev.filter((x: any) => {
        return x.ID !== employee.ID
      })
    })
    deleteEmployee(employee.ID)
    toast.success('El empleado ha sido eliminado')
  }

  const tableHead = Object.keys(employees[0]).map((header, index) => (
    <TableHead key={index}>{header}</TableHead>
  ))

  const tableRows = Object.values(employees).map((employee, rowIndex) => (
    <TableRow key={rowIndex}>
      {
        <TableCell className="">
          <div className="flex">
            <Button className="mr-4" variant={'secondary'}>
              <EditIcon height={14} className="mr-1" />
              Edit
            </Button>
            <Button
              onClick={() => handleDelete(employee)}
              variant={'destructive'}
            >
              <Cross1Icon className="mr-1" height={14} />
              Eliminar
            </Button>
          </div>
        </TableCell>
      }
      {Object.values(employee).map((cell, cellIndex) => (
        <TableCell key={cellIndex} className="min-w-48">
          {cell}
        </TableCell>
      ))}
    </TableRow>
  ))

  return (
    <div>
      <Link href="/nuevo-empleado">
        <Button className="float-right">
          <PlusCircle height={14} className="mr-1" />
          Nuevo Empleado
        </Button>
      </Link>
      <Table className="my-4">
        <TableCaption>Lista de los empleados registrados</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Controles</TableHead>
            {tableHead}
          </TableRow>
        </TableHeader>
        <TableBody>{tableRows}</TableBody>
      </Table>
    </div>
  )
}

export default EmployeesTable
