import type { NextPage } from "next";
import Head from "next/head";
import { Logo } from "../components/logo/logo";
import Personav from "../components/personav/personav";

const Personas: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Personas</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className='bg-white/75 dark:bg-black/75 flex w-full mx-auto px-6 lg:px-4 items-center justify-between fixed z-10'>
        <Logo />
        {/* {renderThemeChanger()} */}
      </header>

      <Personav />
    </div>
  )
}

export default Personas;
