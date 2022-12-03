import type { NextPage } from "next";
import Head from "next/head";
import Error from "next/error";
import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import { statePersonas, getPersonas } from "../features/persona/personaSlice";
import { Logo, LogoLoader } from "../components/logo/logo";
import { ThemeChanger } from "../components/themechanger/themechanger";
import ViewPager from "../components/viewpager/viewpager";
import Link from "next/link";

const Personas: NextPage = () => {
  const { personas, status } = useAppSelector(statePersonas);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getPersonas());
  }, [dispatch]);

  const renderPersonas = () => {
    switch (status) {
      case null:
        return <LogoLoader containerClass="h-screen" />;
      case 200:
        return (
          <div className="">
            <Head>
              <title>Personas</title>
              <link rel="icon" href="/favicon.ico" />
            </Head>

            <header className="group bg-white/75 dark:bg-black/75 flex w-full mx-auto px-6 lg:px-4 items-center justify-between fixed z-10">
              <Logo containerClass="group-hover:hidden" />
              <Link href="/">
                <button>
                  <LogoLoader containerClass="hidden group-hover:flex" />
                </button>
              </Link>
              <ThemeChanger mounted={true} />
            </header>

            <main className="flex items-center h-full justify-center">
              <ViewPager pages={personas} />
            </main>
          </div>
        );
      case status:
        return <Error statusCode={status} />;
      default:
        break;
    }
  };

  return renderPersonas();
};

export default Personas;
