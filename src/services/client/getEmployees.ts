export async function getEmployees() {
  const response = await fetch(
    'https://sheet.best/api/sheets/10fe5e17-207b-4749-8c6c-e8473f871a26?_format=index'
  )
  const data = await response.json()
  return data
}
