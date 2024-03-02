import Image from "next/image"

const getPostsData = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  return res.json()
}

const getUsersData = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  return res.json()
}

const getDogData = async () => {
  const res = await fetch('https://dog.ceo/api/breeds/image/random', {
    next: { revalidate: 3 }
  })
  return res.json()
}


const getRandomDogImages = async () => {
  const res = fetch(`https://dog.ceo/api/breeds/image/random`, {
    next: { revalidate: 2 }
  })

  return res.then(res => res.json())
}

const getRandomDogImage2 = async () => {
  const res = fetch(`https://dog.ceo/api/breeds/image/random?x=${Math.random()}`, {
    next: { revalidate: 2 }
  })

  return res.then(res => res.json())
}

export default async function PostList() {
  const dogs = await Promise.all([getRandomDogImage2(), getRandomDogImage2()])
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Image src={dogs[0].message} alt="Dog 1" width={300} height={300} />
      <Image src={dogs[1].message} alt="Dog 2" width={300} height={300} />
      <div>
        {dogs.map((dog: { message: string, id: number }, index: number) => (
          <p key={index}>{dog.message}</p>
        ))}
      </div>
    </main>
  )
}