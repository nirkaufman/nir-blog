import {Post} from "@/app/_types/post.interfcae";
import {PostEntry} from "@/app/_components/post-entry";

export async function getAllPosts() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', {

  });
  return await res.json();
}

export default async function PostsPage() {
  const posts: Post[] = await getAllPosts();

  return (
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 sm:px-0">
          <h2 className="text-2xl font-bold text-gray-900 leading-tight mb-4">
            Latest Posts
          </h2>
          <div className="max-w-4xl mx-auto">
            {posts.map((post: Post) => <PostEntry key={post.id} post={post}/>)}
          </div>
        </div>
      </main>
  )
}
