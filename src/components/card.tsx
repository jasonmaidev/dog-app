import { stoolData } from "@/api/stool";
import Image from "next/image";

function getOneRandomStool() {
  const index = Math.floor(Math.random() * stoolData.length);
  return stoolData[index];
}

export default function Card() {
  const stool = getOneRandomStool();
  return (
    <main className="flex flex-col items-center p-8 gap-4">
      <Image
        src={stool.imageUrl}
        alt="DogPoo"
        width={224}
        height={224}
        className="rounded-xl" />
      <div className="max-w-md text-yellow-950 font-bold">
        <p>{stool.explanation}</p>
      </div>
    </main>
  )
}