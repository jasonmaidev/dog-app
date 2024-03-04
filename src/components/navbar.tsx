"use client";
import Link from "next/link";
import { RefreshCwIcon } from "lucide-react"
import { useRouter } from "next/navigation"

export default function Navbar() {
  const router = useRouter()

  const reloadAndNavigate = () => {
    router.push('/')
    setTimeout(() => {
      window.location.reload();
    }, 700);
  }

  return <div className="p-8 gap-4 md:gap-8 flex flex-row justify-center items-center space-around">
    <div className="text-4xl">💩</div>
    <Link
      href="/"
      className="py-4 px-8 border-4 border-solid hover:text-yellow-950 hover:border-yellow-950 border-yellow-900 text-yellow-900  rounded-full"

      onClick={reloadAndNavigate}
    >
      <RefreshCwIcon />
    </Link>
    <Link
      href="/about"
      className="py-4 px-8 border-4 border-solid hover:text-yellow-950 hover:border-yellow-950 border-yellow-900 text-yellow-900 rounded-full font-bold"
    >
      About
    </Link>
  </div >
}