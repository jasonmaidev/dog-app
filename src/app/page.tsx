// "use client"
import Dog from "../components/dog"
import Card from "../components/card"
export default function Home() {
  return (
    <main className="flex flex-col sm:flex-row justify-center items-center space-around p-8 md:space-x-4 md:space-y-0">
      <div>
        <Dog />
      </div>
      <div>
        <Card />
      </div>
    </main>
  )
}
