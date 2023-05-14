'use client'

export  default function PostsError() {
  return (
    <div className="bg-white overflow-hidden shadow sm:rounded-lg mb-3">
      <div className="px-4 py-5 sm:p-6">
        <h3 className="text-lg font-medium leading-6 text-gray-900">
          Error
        </h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">
          This is an error page.
        </p>
        <p className="mt-3 text-base text-gray-700">
          This is an error page.
        </p>
        <div className="mt-8 text-right">
          <button type="button"
                  className="inline-block bg-gray-900 text-white px-4 py-2 rounded hover:bg-gray-700">Read More
          </button>
        </div>
      </div>
    </div>
  )
}
