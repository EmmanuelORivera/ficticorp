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
import { EditIcon } from 'lucide-react'

const EmployeesTable = ({ employees }: { employees: string[][] }) => {
  const tableHead = employees[0].map((header, index) => (
    <TableHead key={index}>{header}</TableHead>
  ))

  const tableRows = employees.slice(1).map((employee, rowIndex) => (
    <TableRow key={rowIndex}>
      {employee.map((cell, cellIndex) => (
        <TableCell key={cellIndex} className="min-w-48">
          {cell}
        </TableCell>
      ))}
      {
        <TableCell className="">
          <div className="flex">
            <Button className="mr-4" variant={'secondary'}>
              <EditIcon height={14} className="mr-1" />
              Edit
            </Button>
            <Button variant={'destructive'}>
              <Cross1Icon className="mr-1" height={14} />
              Eliminar
            </Button>
          </div>
        </TableCell>
      }
    </TableRow>
  ))

  return (
    <div>
      <Table className="my-4">
        <TableCaption>Lista de los empleados registrados</TableCaption>
        <TableHeader>
          <TableRow>
            {tableHead}
            <TableHead>Controles</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>{tableRows}</TableBody>
      </Table>
    </div>
  )
}

export default EmployeesTable
