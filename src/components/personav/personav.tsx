import Link from 'next/link';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { browsePersonas, shufflePersonas, userProfile, getUserProfile } from "../../app/reducer";
import { LogoLoader } from '../logo/logo';
import { Home, Profile } from '../svg/svg';
import { ProfileDetails } from '../profilecard/profilecard';
import ViewPager from '../viewpager/viewpager';
import Modal from '../modal/modal';

const Personav = () => {
  const personas = useSelector(browsePersonas);
  const profile = useSelector(userProfile);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(shufflePersonas())
    dispatch(getUserProfile())
  }, [])

  return (
    <>
      <main className="flex items-center h-full justify-center">
        {personas 
        ? <ViewPager personas={personas} /> 
        : <LogoLoader containerClass="h-screen" />}
      </main>

      <footer className="bg-white/75 dark:bg-black/75 flex h-16 w-full items-center justify-center fixed bottom-0 z-10">
        <Link href="/">
          <button
            type="button"
            className="group w-full block py-5 px-3 text-center hover:bg-teal-700"
          >
            <Home className="group-hover:hidden" />
            <p className="hidden group-hover:block">HOME</p>
          </button>
        </Link>

        <Modal
          childrenClass="group w-full block py-5 px-3 text-center hover:bg-teal-700"
          title='@someone'
          titleClass="border-b-2 border-teal-300"
          body={<ProfileDetails profile={profile} />}
        >
          <Profile className="group-hover:hidden" />
          <p className="hidden group-hover:block">PROFILE</p>
        </Modal>
      </footer>
    </>
  )
}

export default Personav;
