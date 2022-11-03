import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link'
import { BriefcaseIcon, MapPinIcon } from '@heroicons/react/24/outline'
import { getUserProfile, userProfile } from '../../app/reducer';
import { ProfileLinks } from '../profilelinks/profilelinks'
import { useEffect } from 'react';

export const ProfileDetails = ({
  profile,
}) => {
  return (
    <>
      <p className="pt-4 text-base font-bold flex items-center justify-start">
        <BriefcaseIcon className="h-4 fill-current text-teal-700 pr-4" />
        {profile.occupation}
      </p>
      <p className="pt-2 text-xs lg:text-sm flex items-center justify-start">
        <MapPinIcon className="h-4 fill-current text-teal-700 pr-4" />
        {profile.location}
      </p>
      <p className="pt-8 text-sm">{profile.description}</p>

      <div className="py-4 lg:w-full mx-auto flex flex-wrap justify-evenly lg:justify-between">
        <ProfileLinks />
      </div>
    </>
  )
}

export const ProfileCard = () => {
  const profile = useSelector(userProfile);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUserProfile())
  }, [])

  return (
    <div className="max-w-4xl flex items-center h-auto flex-wrap mx-auto my-16 lg:my-32 lg:my-0">
      <div className="w-full lg:w-2/5 shadow-xl">
        <img src={profile.picture} className="hidden lg:block object-cover min-h-[600px]" />
      </div>

      <div className="w-full lg:w-3/5 shadow-xl bg-white dark:bg-black mx-6 lg:mx-0 p-4 md:p-12 text-center lg:text-left">
        <img src={profile.picture} className="block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 object-cover" />

        <h1 className="text-3xl font-bold pt-8 lg:pt-0 lg:mx-0 lg:w-4/5 pb-3 border-b-2 border-teal-300">
          @{profile.username}
        </h1>

        <ProfileDetails profile={profile} />

        <div className="flex justify-end">
          <Link href="/personas">
            <button className="w-full sm:w-auto bg-teal-700 hover:bg-teal-900 text-white font-bold py-2 px-4">
              Find Personas
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
