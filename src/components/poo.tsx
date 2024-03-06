import { stoolData } from "@/api/stool";
import Image from "next/image";

function getOneRandomStool() {
  const index = Math.floor(Math.random() * stoolData.length);
  return stoolData[index];
}

export default function Poo() {
  const stool = getOneRandomStool();
  return (
    <main className="flex flex-col items-center p-8 gap-4">
      <Image
        src={stool.imageUrl}
        alt="DogPoo"
        className={`rounded-xl transition-all duration-200 hover:scale-110`}
        width={224}
        height={224}
      />
      <div className="max-w-sm text-yellow-950 font-bold">
        <p>{stool.explanation}</p>
      </div>
    </main>
  )
}