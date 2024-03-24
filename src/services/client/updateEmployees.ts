export async function updateEmployees(newEmployee: any) {
  try {
    try {
      const response = await fetch(
        `https://sheet.best/api/sheets/10fe5e17-207b-4749-8c6c-e8473f871a26`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newEmployee),
        }
      )
    } catch (error) {
      console.log(error)
    }
  } catch (error) {}
}
