import React from 'react'
import { Box, Typography, TextField } from '@mui/material'
import FileUploader from './FileUploader'

const TextEditor = ({ label, content, setContent, accept = '.txt' }) => {
  const handleChange = (e) => {
    setContent(e.target.value)
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Typography variant="h6">{label}</Typography>
      <FileUploader label="Upload File" accept={accept} onFileLoad={setContent} />
      <TextField
        multiline
        minRows={15}
        maxRows={50}
        value={content}
        onChange={handleChange}
        fullWidth
        variant="outlined"
        sx={{ fontFamily: 'monospace' }}
      />
    </Box>
  )
}

export default TextEditor