'use client'

interface DeleteButtonProps {
  handleDelete: () => void
}


function DeleteSnippetButton(props: DeleteButtonProps) {
  return (
    <div>
      <button onClick = {props.handleDelete} className='p-2 border rounded'>Delete</button>      
    </div>  
  );
}

export default DeleteSnippetButton;