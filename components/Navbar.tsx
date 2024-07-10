import Link from "next/link"

export default function Navbar() {
  return (
    <nav>
      <div>
        <Link href="/">MiniBlog</Link>
        <Link href="/drafts">Drafts</Link>
        <Link href="/about">About</Link>
      </div>
      <div>
        <Link href="/signup">Sign Up</Link>
        <Link href="/create">+ Create Post</Link> 
      </div>
    </nav>
  )
}

