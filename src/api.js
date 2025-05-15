

export async function renderLatexFromContent(csvContent, jsonContent) {
  const csvBlob = new Blob([csvContent], { type: 'text/csv' })
  const jsonBlob = new Blob([jsonContent], { type: 'application/json' })

  const formData = new FormData()
  formData.append('file', csvBlob, 'data.csv')
  formData.append('file', jsonBlob, 'config.json')

  try {
    const response = await fetch('/render', {
      method: 'POST',
      body: formData,
    })

    if (!response.ok) {
      throw new Error(`Render failed: ${response.statusText}`)
    }

    const result = await response.text()
    return result
  } catch (error) {
    console.error('Error rendering LaTeX:', error)
    return 'Error rendering LaTeX'
  }
}