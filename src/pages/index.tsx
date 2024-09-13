import Head from 'next/head'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center">
      <Head>
        <title>Team-Sync</title>
        <meta name="description" content="Team-Sync - Synchronize your team" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center flex-grow w-full">
        <h1 className="text-5xl font-bold text-white mb-8">
          Team-Sync
        </h1>
        {/* Add more content here */}
      </main>

      <footer className="w-full py-4 text-center text-gray-400">
        © 2023 Team-Sync. All rights reserved.
      </footer>
    </div>
  )
}