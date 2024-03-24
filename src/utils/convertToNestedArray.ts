export function convertToNestedArray(data: any) {
  // Extracting keys
  const keys = Object.keys(data[0])

  // Creating an array with the keys as the first element
  const result = [keys]

  // Pushing each object's values into the result array
  data.forEach((obj: any) => {
    const values = keys.map((key) => obj[key])
    result.push(values)
  })

  return result
}
