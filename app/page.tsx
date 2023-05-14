import Image from 'next/image'

export default function Home() {
  console.log("Home component");

  return (
      <>
        <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <p className="text-xl text-gray-700 leading-8">
              Welcome to my personal blog! Here, I share my thoughts and ideas about various topics, including
              technology,
              programming, and life in general.
            </p>
            <p className="mt-4 text-lg text-gray-700 leading-8">
              Feel free to browse around and check out my latest posts. If you have any questions or comments, don't
              hesitate
              to contact me.
            </p>
          </div>
        </main>
      </>
  )
}
