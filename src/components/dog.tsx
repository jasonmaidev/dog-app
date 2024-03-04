import Image from "next/image"

export const getOneRandomDogImage = async () => {
  const res = await fetch(
    `https://dog.ceo/api/breeds/image/random?x=${Math.random()}`
    , { next: { revalidate: 1 } }
  );
  return res.json();
};

export default async function Dog() {
  const dog = await getOneRandomDogImage()
  return (
    <main className="flex flex-col items-center p-8 gap-4">
      <Image
        src={dog?.message}
        alt="Dog"
        width={360}
        height={360}
        className="rounded-3xl border-8 border-solid border-yellow-900" />
    </main>
  )
}
