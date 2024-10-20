export default async function Home() {
  const data = await fetch('http://localhost:3000/api/home')
  let posts = await data.json()
  return (
    <div>
      <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
    </div>
  );
}