import React from 'react'

async function SsrPage() {
    const data = await fetch('https://jsonplaceholder.typicode.com/comments').then(res => res.json());
  return (
    <div>
      <h1>Server-Side Rendered Page</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}

export default SsrPage
