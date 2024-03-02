export default function AboutWithId({ params }: { params: { id: string } }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      About {params.id}
    </main>
  )
}