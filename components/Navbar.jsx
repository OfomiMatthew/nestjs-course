import Link from "next/link"


const Navbar = () => {
  return (
    <nav>
    <ul>
    <div className="logo">
    <h1>logo</h1>
    <div className="link-container">
    <Link href="/">Home</Link>
    <Link href="/about">About</Link>
    <Link href="/contact">Contact</Link>
    <Link href="/portfolio">Portfolio</Link>
    </div>
    </div>
    </ul>
    </nav>
  )
}

export default Navbar