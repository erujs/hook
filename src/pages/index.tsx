import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Error from 'next/error'
import { useTheme } from 'next-themes'
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline'
import { checkStatus, getUserProfile } from '../app/reducer'
import { Logo, LogoLoader } from '../components/logo/logo'
import ProfileCard from '../components/profilecard/profilecard'
import Eru from '../components/eru/eru'

const Home: NextPage = () => {
  const status = useSelector(checkStatus);
  const dispatch = useDispatch()
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    dispatch(getUserProfile())
    setMounted(true);
  });

  const renderThemeChanger = () => {
    if (!mounted) return null;
    const currentTheme = theme === 'system' ? systemTheme : theme;

    if (currentTheme === 'dark') {
      return (
        <SunIcon
          className='w-7 h-7'
          role='button'
          onClick={() => setTheme('light')}
        />
      )
    } else {
      return (
        <MoonIcon
          className='w-7 h-7'
          role='button'
          onClick={() => setTheme('dark')}
        />
      )
    };
  }

  let dataRender = () => {
    switch (status) {
      case null:
        return (
          <LogoLoader />
        )
      case 200:
        return (
          <div className="flex min-h-screen flex-col items-center justify-center">
            <Head>
              <title>Hook</title>
              <link rel="icon" href="/favicon.ico" />
            </Head>

            <header className='flex w-full mx-auto px-6 pb-6 lg:px-4 lg:pb-4 items-center justify-between'>
              <Logo />
              {renderThemeChanger()}
            </header>

            <main className="flex w-full flex-1 flex-col items-center justify-center text-center">
              <ProfileCard />
            </main>

            <footer className="flex h-24 w-full items-center justify-center">
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
