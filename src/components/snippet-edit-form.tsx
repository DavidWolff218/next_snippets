'use client'
import type { Snippet } from '@prisma/client'
import Editor from '@monaco-editor/react'
import {  useState, useRef } from 'react'
import { editSnippet } from '@/actions'

interface SnippetEditFormProps{
  snippet: Snippet
}

function SnippetEditForm({snippet}: SnippetEditFormProps) {

  const [code, setCode] = useState(snippet.code)

  // const codeRef = useRef(snippet.code);

  const handleEditorChange = (value: string = "" ) => {
    setCode(value)
    // codeRef.current = value;
    // console.log(codeRef.current)
  }

  const editSnippetAction = editSnippet.bind(null, snippet.id, code)


  return ( 
    <div>
        <Editor 
          height="40vh"
          theme="vs-dark"
          language="javascript"
          defaultValue={snippet.code}
          options={{minimap: {enabled: false}}}
          onChange={handleEditorChange}
          />
        <form action={editSnippetAction}>
          <button type="submit" className="p-2 border rounded">Save</button>
        </form>
    </div> 
  );
}

export default SnippetEditForm;