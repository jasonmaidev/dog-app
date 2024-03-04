export default function DogWithId({ params }: { params: { id: string } }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8 text-yellow-900 font-bold">
      Dynamic route for Dog {params.id}
    </main>
  )
}