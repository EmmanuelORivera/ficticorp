export async function deleteEmployee(id: string) {
  try {
    const res = await fetch(
      `https://sheet.best/api/sheets/10fe5e17-207b-4749-8c6c-e8473f871a26/ID/*${id}*`,
      {
        method: 'DELETE',
      }
    )
    return await res.json()
  } catch (error) {
    console.error(error)
  }
}
