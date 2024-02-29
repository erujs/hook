import { useState, useEffect } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { ThemeChanger } from "../components/themechanger/themechanger";
import { Introduction } from "../components/introduction/introduction";
import { Eru } from "../components/eru/eru";
import { Profile } from "../components/svg/svg";

const Home: NextPage = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <Head>
        <title>Hook</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="group flex w-full mx-auto px-6 py-6 lg:px-4 lg:pb-4 items-center justify-end">
        <ThemeChanger mounted={mounted} />
      </header>

      <main className="flex w-full flex-1 flex-col items-center justify-center text-center">
        <Introduction />
      </main>

      <footer className="flex h-24 w-full items-center justify-between px-6">
        <Eru />
        <Link href="/profile">
          <button className="bg-white/75 dark:bg-black/75 w-16 h-16 rounded-full active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none">
            <Profile className="mb-0" />
          </button>
        </Link>
      </footer>
    </div>
  );;
};

export default Home;
