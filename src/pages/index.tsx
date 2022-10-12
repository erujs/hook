import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Error from 'next/error'
import { useSelector } from 'react-redux'
import { getStatus } from '../app/reducer'
import ProfileCard from '../components/profilecard/profilecard'
import Eru from '../components/eru/eru'

const Home: NextPage = () => {
  const status = useSelector(getStatus);

  let dataRender = () => {
    switch (status) {
      case null:
        return <>Loading ...</>
      case 200:
        return (
          <div className="flex min-h-screen flex-col items-center justify-center py-2">
            <Head>
              <title>Hook</title>
              <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
              <ProfileCard />
            </main>

            <footer className="flex h-24 w-full items-center justify-center border-t">
              <a
                className="flex items-center justify-center gap-2"
                href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
              >
                Powered by{' '}
                <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
              </a>
              <Eru />
            </footer>
          </div>
        )
      case status:
        return <Error statusCode={status} />
      default:
        break;
    }
  }

  return dataRender()
}

export default Home
