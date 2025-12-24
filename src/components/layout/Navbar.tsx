import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="bg-background/95 supports-[backdrop-filter]:bg-background/60 fixed top-0 z-50 w-full border-b backdrop-blur">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex">
          <Link className="mr-6 flex items-center space-x-2" href="/">
            <span className="font-bold">Portfolio</span>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <nav className="flex items-center space-x-6">
            <a
              href="#about"
              className="hover:text-primary text-sm font-medium transition-colors"
            >
              About
            </a>
            <a
              href="#projects"
              className="hover:text-primary text-sm font-medium transition-colors"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="hover:text-primary text-sm font-medium transition-colors"
            >
              Contact
            </a>
          </nav>
        </div>
      </div>
    </nav>
  )
}
