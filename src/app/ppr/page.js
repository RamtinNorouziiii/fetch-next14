import { Suspense } from 'react';

export default function PprPage() {
  return (
    <div>
      <h1>Progressive Partial Rendering Example</h1>
      <Suspense fallback={<div>Loading header...</div>}>
        <Header />
      </Suspense>
      <Suspense fallback={<div>Loading content...</div>}>
        <MainContent />
      </Suspense>
    </div>
  );
}

async function Header() {
  const data = await fetch('https://jsonplaceholder.typicode.com/comments',{next:{revalidate:10}}).then((res) => res.json());
  return <header>{JSON.stringify(data)}</header>;
}

async function MainContent() {
  const data = await fetch('https://jsonplaceholder.typicode.com/comments').then((res) => res.json());
  return <main>{JSON.stringify(data)}</main>;
}