import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center py-2">
      <Head>
        <title>Vercel Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

<h1 className='text-3xl font-bold '>Vercel</h1>
    </div>
  )
}

export default Home
