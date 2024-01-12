import { db } from '@/db'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import * as actions from '@/actions'
// import DeleteSnippetButton from '@/components/delete-button'

interface SnippetShowPageProps {
  params: {
    id: string
  }
}

async function SnippetShowPage(props: SnippetShowPageProps) {
  await new Promise((r) => setTimeout(r, 1000))
  
  const snippet = await db.snippet.findFirst({
    where:{ id: parseInt(props.params.id)}
  })

  if (!snippet) {
    return notFound()
  }

  const deleteSnippetAction = actions.deleteSnippet.bind(null, snippet.id)

  // const handleDelete = () => {
  //   console.log("deleted")
  // }
 
  return (
    <div>
      <div className='flex m-4 justify-between items center'> 
        <h1 className='text-xl font-bold'>{snippet.title}</h1>
          <div className='flex gap-4'>
            <Link href={`/snippets/${snippet.id}/edit`} className='p-2 border rounded'>Edit</Link>
            <form action={deleteSnippetAction}>
              <button className='p-2 border rounded'>Delete</button>
            </form>
            {/* <DeleteSnippetButton handleDelete={handleDelete} /> */}
          </div>
      </div>
      <pre className='p-3 border-rounded bg-gray-200 border-gray-200'>
        <code> {snippet.code}</code>
      </pre>
    </div>  
  );
}

export default SnippetShowPage;