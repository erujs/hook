import { useState, useEffect } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Error from "next/error";
import { useAppSelector, useAppDispatch } from '../app/hooks'
import { stateProfile, getUserProfile } from "../features/profile/profileSlice";
import { Logo, LogoLoader } from "../components/logo/logo";
import { ThemeChanger } from "../components/themechanger/themechanger";
import { ProfileCard } from "../components/profilecard/profilecard";
import { Eru } from "../components/eru/eru";

const Home: NextPage = () => {
  const { status } = useAppSelector(stateProfile);
  const dispatch = useAppDispatch();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    dispatch(getUserProfile());
    setMounted(true);
  }, [dispatch]);

  let dataRender = () => {
    switch (status) {
      case null:
        return <LogoLoader containerClass="h-screen" />;
      case 200:
        return (
          <div className="flex min-h-screen flex-col items-center justify-center">
            <Head>
              <title>Hook</title>
              <link rel="icon" href="/favicon.ico" />
            </Head>

            <header className="group flex w-full mx-auto px-6 pb-6 lg:px-4 lg:pb-4 items-center justify-between">
              <Logo containerClass="group-hover:hidden" />
              <LogoLoader containerClass="hidden group-hover:flex" />
              <ThemeChanger mounted={mounted} />
            </header>

            <main className="flex w-full flex-1 flex-col items-center justify-center text-center">
              <ProfileCard />
            </main>

            <footer className="flex h-24 w-full items-center justify-center">
              <Eru />
            </footer>
          </div>
        );
      case status:
        return <Error statusCode={status} />;
      default:
        break;
    }
  };

  return dataRender();
};

export default Home;
