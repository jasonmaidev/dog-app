import Link from "next/link";

export default function Navbar() {
  return <div className="p-4 gap-4 md:gap-8 flex flex-row justify-center space-around">
    <Link
      href="/"
      className="py-4 px-8 border-2 border-solid border-yellow-800 text-yellow-950  rounded-full"
    >
      Home
    </Link>
    <Link
      href="/about"
      className="py-4 px-8 border-2 border-solid border-yellow-800 text-yellow-950  rounded-full"
    >
      About
    </Link>
    <Link
      href="/dog"
      className="py-4 px-8 border-2 border-solid border-yellow-800 text-yellow-950  rounded-full"
    >
      Dog
    </Link>
  </div>
}