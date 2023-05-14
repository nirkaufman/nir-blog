import Link from 'next/link';

export default function Header() {
    return (

        <header className="bg-blue-500 py-4">
          <div className="container mx-auto px-4">
            <h1 className="text-white text-2xl font-bold">Nir Kaufman Blog</h1>
          </div>
          <nav className="flex items-center justify-between">
            <div className="text-white text-2xl font-bold">Nir Kaufman Blog</div>
            <ul className="flex space-x-4">
              <Link href={'/'}  className="text-white">Home</Link>
              <Link href={'posts'} className="text-white">Posts</Link>
              <Link href={'about'} className="text-white">About</Link>
              <a href={'photos'} className="text-white">Photos</a>
            </ul>
          </nav>
        </header>
    )
}
