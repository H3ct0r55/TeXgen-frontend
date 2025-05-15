import { useState } from 'react'
import TextEditor from '../components/TextEditor'
import { renderLatexFromContent } from '../api'

function Home() {
  const [csvContent, setCsvContent] = useState('')
  const [jsonContent, setJsonContent] = useState('')
  const [output, setOutput] = useState('')

  const handleRender = async () => {
    const result = await renderLatexFromContent(csvContent, jsonContent)
    setOutput(result)
  }

  return (
    <div className="container">
      <h1>TeXgen Editor</h1>

      <div className="editors">
        <div className="editor">
          <TextEditor
            label="CSV Input"
            content={csvContent}
            setContent={setCsvContent}
            accept=".csv"
          />
        </div>
        <div className="editor">
          <TextEditor
            label="JSON Config"
            content={jsonContent}
            setContent={setJsonContent}
            accept=".json"
          />
        </div>
      </div>

      <button onClick={handleRender}>Render LaTeX</button>

      <h2>Rendered LaTeX Output</h2>
      <pre>{output}</pre>
    </div>
  )
}

export default Home
