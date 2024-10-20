import React from 'react'

async function IsrPage() {
    const data = await fetch('https://jsonplaceholder.typicode.com/comments', { next: { revalidate: 10 } })
    .then(res => res.json());
  return (
    <div>
     <h1>ISR Page</h1>
     <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}

export default IsrPage
