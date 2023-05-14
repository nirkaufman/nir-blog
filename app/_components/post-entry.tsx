// 'use client'
import {Post} from "../_types/post.interfcae";
import Link from "next/link";

export function PostEntry ({ post }: { post: Post } ) {

  return (
      <div className="bg-white overflow-hidden shadow sm:rounded-lg mb-3">
        <div className="px-4 py-5 sm:p-6">
          <h3 className="text-lg font-medium leading-6 text-gray-900">
            {post.title}
          </h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">
            Published on May 1st, 2023
          </p>
          <p className="mt-3 text-base text-gray-700">
            {post.body}
          </p>
          <div className="mt-8 text-right">
            <Link type="button"
                  href={`/posts/${post.id}`}
                  className="inline-block bg-gray-900 text-white px-4 py-2 rounded hover:bg-gray-700">Read More
            </Link>
          </div>
        </div>
      </div>
  )
}
