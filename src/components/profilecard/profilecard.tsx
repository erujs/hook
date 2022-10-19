import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link'
import { BriefcaseIcon, MapPinIcon } from '@heroicons/react/24/outline'
import { getUserProfile, userProfile } from '../../app/reducer';
import ProfileLinks from '../profilelinks/profilelinks'
import { useEffect } from 'react';

const ProfileCard = () => {
  const profile = useSelector(userProfile);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUserProfile())
  }, [])

  return (
    <div className="max-w-4xl flex items-center h-auto flex-wrap mx-auto my-32 lg:my-0">
      <div id="profile" className="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white dark:bg-black opacity-75 mx-6 lg:mx-0">
        <div className="p-4 md:p-12 text-center lg:text-left">
          <div
            className="block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center"
            style={{ backgroundImage: `url(${profile.picture})` }}
          />

          <h1 className="text-3xl font-bold pt-8 lg:pt-0 lg:mx-0 lg:w-4/5 pb-3 border-b-2 border-cyan-300">
            @{profile.username}
          </h1>
          <p className="pt-4 text-base font-bold flex items-center justify-start">
            <BriefcaseIcon className="h-4 fill-current text-cyan-700 pr-4" />
            {profile.occupation}
          </p>
          <p className="pt-2 text-xs lg:text-sm flex items-center justify-start">
            <MapPinIcon className="h-4 fill-current text-cyan-700 pr-4" />
            {profile.location}
          </p>
          <p className="pt-8 text-sm">{profile.description}</p>

          <div className="py-4 lg:w-full mx-auto flex flex-nowrap justify-between ">
            <ProfileLinks />
          </div>

          <div className="flex justify-end">
            <Link href="/persona">
              <button className="w-full sm:w-auto bg-cyan-700 hover:bg-cyan-900 text-white font-bold py-2 px-4">
                Find Personas
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="w-full lg:w-2/5">
        <img src={profile.picture} className="rounded-none shadow-2xl hidden lg:block" />
      </div>
    </div>
  )
}

export default ProfileCard;
