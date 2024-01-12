'use client'

interface ErrorPageProps{
  error: Error,
  reset: () => void
}

export default function ErrorPage({error}: ErrorPageProps){
  console.log("error", error)
  return <div>{error.message}</div>
}