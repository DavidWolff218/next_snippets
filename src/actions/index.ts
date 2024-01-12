'use server'

import { db } from '@/db'
import { redirect } from 'next/navigation'

export async function editSnippet(id: number, code: string) {
  console.log('edit action', id, code)
  await db.snippet.update({
    where: { id },
    data: { code }
  })

  redirect(`/snippets/${id}`)
}

export async function deleteSnippet(id: number){
  await db.snippet.delete({
    where: {id}
  })
  redirect('/')
}


export async function createSnippet(formState: {message: string},formData: FormData) {
  
  // this needs to be a server action
  // 'use server';
//   console.log(formData)
// // check the users input
  const title = formData.get('title') as string
  const code = formData.get('code') as string
//create a new record in db
try{
if( typeof title !== 'string' || title.length < 3){
  return {
    message: "Title must be longer"
  }
}
if( typeof code !== 'string' || code.length < 5){
  return {
    message: "Code must be longer"
  }
}
 await db.snippet.create({
    data:{
      title: title, 
      code: code
    }
  })
// throw new Error("Failed to Save")

} catch (err: unknown){
  if(err instanceof Error) {
    return {
      message: err.message
    };
  } else{
    return {
      message: 'Something went wrong...'
    }
  }
}
  redirect('/')
}