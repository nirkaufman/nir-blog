import './globals.css'
import Link from "next/link";
import {rubik} from "@/app/_lib/fonts";

export default function RootLayout({children,}: { children: React.ReactNode }) {
  return (
    <html lang="en">
    <body className={rubik.className}>
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold leading-tight text-gray-900">
          Nir Kaufman
        </h1>
        <nav className="flex">
          <Link href="/" className="mr-6 text-lg text-gray-900 hover:text-gray-600">Home</Link>
          <Link href="posts" className="mr-6 text-lg text-gray-900 hover:text-gray-600">Posts</Link>
          <Link href="about" className="text-lg text-gray-900 hover:text-gray-600">About</Link>
          <Link href="photos" className="text-lg text-gray-900 hover:text-gray-600">Photos</Link>
        </nav>
      </div>
    </header>
    {children}
    </body>
    </html>
  )
}
