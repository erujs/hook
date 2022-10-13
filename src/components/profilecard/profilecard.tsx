import Link from 'next/link'
import { BriefcaseIcon, MapPinIcon } from '@heroicons/react/24/outline'

const ProfileCard = () => {
  return (
    <div className="max-w-4xl flex items-center h-auto flex-wrap mx-auto my-32 lg:my-0">
      <div id="profile" className="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white dark:bg-black opacity-75 mx-6 lg:mx-0">
        <div className="p-4 md:p-12 text-center lg:text-left">
          <div className="block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center bg-[url('https://source.unsplash.com/wgDyTXJm-lU')]"></div>

          <h1 className="text-3xl font-bold pt-8 lg:pt-0 lg:mx-0 lg:w-4/5 pb-3 border-b-2 border-cyan-300">@torney</h1>
          <p className="pt-4 text-base font-bold flex items-center justify-start">
            <BriefcaseIcon className="h-4 fill-current text-cyan-700 pr-4" />
            Software Engineer
          </p>
          <p className="pt-2 text-gray-600 text-xs lg:text-sm flex items-center justify-start">
            <MapPinIcon className="h-4 fill-current text-cyan-700 pr-4" />
            Upside Down
          </p>
          <p className="pt-8 text-sm">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat expedita eum beatae praesentium cumque deleniti rerum necessitatibus quibusdam nesciunt ut culpa ratione, officia fugit possimus harum recusandae nobis quidem architecto?</p>

          <div className="pt-12 pb-8">
            <button className="bg-cyan-700 hover:bg-cyan-900 text-white font-bold py-2 px-4 rounded-full">
              <Link href="/persona">Find Personas</Link>
            </button>
          </div>

          <div className="mt-6 pb-16 lg:pb-0 w-4/5 lg:w-full mx-auto flex flex-wrap items-center justify-between">
            <a className="link" href="#" data-tippy-content="@facebook_handle"><svg className="h-6 fill-current text-gray-600 hover:text-cyan-700" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Facebook</title><path d="M22.676 0H1.324C.593 0 0 .593 0 1.324v21.352C0 23.408.593 24 1.324 24h11.494v-9.294H9.689v-3.621h3.129V8.41c0-3.099 1.894-4.785 4.659-4.785 1.325 0 2.464.097 2.796.141v3.24h-1.921c-1.5 0-1.792.721-1.792 1.771v2.311h3.584l-.465 3.63H16.56V24h6.115c.733 0 1.325-.592 1.325-1.324V1.324C24 .593 23.408 0 22.676 0" /></svg></a>
          </div>
        </div>
      </div>

      <div className="w-full lg:w-2/5">
        <img src="https://source.unsplash.com/wgDyTXJm-lU" className="rounded-none lg:rounded-lg shadow-2xl hidden lg:block" />
      </div>
    </div>
  )
}

export default ProfileCard;