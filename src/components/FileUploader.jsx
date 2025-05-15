

import React from 'react'
import { Button, Typography, Box } from '@mui/material'

const FileUploader = ({ label, accept = '.txt', onFileLoad }) => {
  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = (event) => onFileLoad(event.target.result)
    reader.readAsText(file)
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
      <Typography variant="subtitle2">{label}</Typography>
      <Button variant="outlined" component="label">
        Upload File
        <input type="file" hidden accept={accept} onChange={handleFileChange} />
      </Button>
    </Box>
  )
}

export default FileUploader