import React, { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [posts, setPosts] = useState([]);

  const handleFetchPosts = async () => {
    const postsResponse = await fetch("/api/posts");
    const postsData = await postsResponse.json();
    setPosts(postsData);

  };

  return (
    <>
      <button onClick={handleFetchPosts}>Fetch Posts</button>

      <ul>
        {posts.map(({ id, title }) => (
          <li key={id}>{ title }</li>
        ))}
      </ul>
      
      <Link href="/serverside">
          <button>Check serverside approach</button>
      </Link>
    </>
  )
}
