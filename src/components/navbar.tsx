"use client";
import Link from "next/link";
import { RefreshCwIcon } from "lucide-react"

export default function Navbar() {

  const reload = () => {
    setTimeout(() => {
      window.location.reload();
    }, 400);
  }

  return <div className="p-8 gap-4 md:gap-8 flex flex-row justify-center items-center space-around">
    <Link
      href="/"
      className="py-4 px-8"
    >
      <div className="text-4xl">💩</div>
    </Link>
    <button
      className="py-4 px-8 border-4 border-solid hover:text-yellow-950 hover:border-yellow-950 border-yellow-900 text-yellow-900  rounded-full"
      onClick={reload}
    >
      <RefreshCwIcon />
    </button>
    <Link
      href="/about"
      className="py-4 px-8 border-4 border-solid hover:text-yellow-950 hover:border-yellow-950 border-yellow-900 text-yellow-900 rounded-full font-bold"
    >
      About
    </Link>
  </div >
}