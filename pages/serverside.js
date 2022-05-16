import Link from "next/link";

// Function has to be declaration rather than expression.
export async function getServerSideProps() {
    const postsResponse = await fetch(process.env.BASE_URL + '/api/posts');
    const postsData = await postsResponse.json();
  
    return {
      props: {
        posts: postsData
      }
    }
  }


const serverSide = ({ posts }) => {
    return (
        <>
            <ul>
                {posts.map(({ id, title }) => (
                    <li key={id}>{ title }</li>
                ))}
            </ul>

            <Link href="/">
                <a>Return to home</a>
            </Link>
        </>
    )

};

export default serverSide;