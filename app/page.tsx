import Head from 'next/head'

export default function Home() {
  return (
    <div className="bg-gray-100">
      <Head>
        <title>My Next.js App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto p-4">
        <h1 className="text-3xl font-bold underline mb-4">Hello Next.js</h1>
        <p className="text-lg text-gray-700">
          This is an example of using Next.js with Tailwind CSS.
        </p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
          Click Me!
        </button>
      </main>
    </div>
  )
}
