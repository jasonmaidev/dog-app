import Image from "next/image"

const getOneRandomDogImage = async () => {
  const res = await fetch(`https://dog.ceo/api/breeds/image/random`, { next: { revalidate: 1 } })
  return res.json()
}

export default async function Dog() {
  const dog = await getOneRandomDogImage()
  return (
    <main className="flex flex-col items-center p-8 gap-4 text-yellow-800">
      <Image src={dog?.message} alt="Dog" width={300} height={300} className="border-0 border-solid rounded-xl" />
    </main>
  )
}
