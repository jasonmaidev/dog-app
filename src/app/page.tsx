"use client"
import Dog from "./dog/page"
import { useAction } from "next/server"
import { RefreshCwIcon } from "lucide-react"

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <button className="text-yellow-800" onClick={Dog}>
        <RefreshCwIcon />
      </button>
      <div>
        <Dog />
      </div>
    </main>
  )
}
