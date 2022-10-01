import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import Deck from '../components/deck/deck'

const Home: NextPage = () => {

  return (
    <div className="">
      <Head>
        <title>Hook</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <Deck />
      </main>

      {/* <footer className="flex h-24 w-full items-center justify-center border-t">
      </footer> */}
    </div>
  )
}

export default Home
