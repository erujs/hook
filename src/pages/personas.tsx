import type { NextPage } from "next";
import Head from "next/head";
import { Logo, LogoLoader } from "../components/logo/logo";
import { ThemeChanger } from "../components/themechanger/themechanger";
import Personav from "../components/personav/personav";

const Personas: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Personas</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className='group bg-white/75 dark:bg-black/75 flex w-full mx-auto px-6 lg:px-4 items-center justify-between fixed z-10'>
        <Logo containerClass="group-hover:hidden" />
        <LogoLoader containerClass="hidden group-hover:flex" />
        <ThemeChanger mounted={true} />
      </header>

      <Personav />
    </div>
  )
}

export default Personas;
