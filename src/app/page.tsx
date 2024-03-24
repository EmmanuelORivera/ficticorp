import { google } from 'googleapis'
import EmployeesTable from '@/components/EmployeeTable/EmployeesTable'

async function getEmployees() {
  const auth = await google.auth.getClient({
    scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
  })

  const sheets = google.sheets({ version: 'v4', auth })

  const response = await sheets.spreadsheets.values.get({
    spreadsheetId: process.env.SHEET_ID,
    range: 'Sheet1',
  })

  return response.data.values!
}

export default async function Home() {
  const employees = await getEmployees()
  return (
    <main className="">
      <EmployeesTable employees={employees} />
    </main>
  )
}
