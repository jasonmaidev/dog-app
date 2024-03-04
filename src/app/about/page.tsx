export default function About() {
  return (
    <main className="flex flex-col items-center justify-between p-8">
      <div className="flex flex-col items-center gap-4 max-w-md text-yellow-950 font-bold">
        <h1>Disclaimer</h1>
        <p>
          This is a sh#tty web app that fetches a random dog and returns a random poo to help
          owners identify potential health problems.
          <span className="text-xs px-1">
            <i>
              *Assets are borrowed from dog.ceo/dog-api and bigdogpetfoods.com
            </i>
          </span>
        </p>
        <p>
          Do not mind me. I am just playing around with the new server components architecture in Next 14 and autocomplete
          using the awesome Codeium Ai vscode extension.
        </p>
      </div>
    </main>
  )
}