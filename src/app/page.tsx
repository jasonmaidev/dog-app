// "use client"
import Dog from "../components/dog"
import Poo from "../components/poo"
export default function Home() {
  return (
    <main
      className="
    flex 
    flex-col 
    sm:flex-row 
    justify-center 
    items-center 
    space-around 
    p-8 
    md:space-x-4 
    md:space-y-0"
    >
      <div>
        <Dog />
      </div>
      <div>
        <Poo />
      </div>
    </main>
  )
}
