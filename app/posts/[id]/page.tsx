import Link from "next/link";
import styles from './post.module.css'

export async function getPostById(postId: number) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)

  if (!res.ok) {
    throw new Error('Something went wrong')
  }

  return await res.json();
}

export default async function PostPage({params: {id}}: { params: { id: number } }) {
  const post = await getPostById(id);

  return (
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className={styles.red}>I am REDDD</div>
        <div className="px-4 sm:px-0">
          <h2 className="text-2xl font-bold text-gray-900 leading-tight mb-4">
            {post.title}
          </h2>
          <p className="text-base text-gray-500 mb-4">
            Published on May 1st, 2023
          </p>
          <div className="prose prose-lg">
            {post.body}
          </div>

          <div className="mt-8 text-right">
            <Link href={'posts'}
                  className="inline-block bg-gray-900 text-white px-4 py-2 rounded hover:bg-gray-700">Back</Link>
          </div>
        </div>
      </main>
  )
}
