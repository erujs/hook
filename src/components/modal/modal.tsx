import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { BriefcaseIcon, MapPinIcon } from '@heroicons/react/24/outline'
import ProfileLinks from '../profilelinks/profilelinks'

const Modal = (props) => {
  let [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button type="button" onClick={() => setIsOpen(true)} className="w-full block py-5 px-3 text-center hover:bg-cyan-700">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mb-2 mx-auto">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z" />
        </svg>
        PROFILE
      </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={() => setIsOpen(false)}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-lg transform overflow-hidden p-4 text-left align-middle shadow-2xl transition-all">
                  <Dialog.Title
                    as="h1"
                    className="text-3xl font-bold pt-8 lg:pt-0 lg:mx-0 pb-3 border-b-2 border-cyan-300 flex justify-between"
                  >
                    @someone
                    <button
                      type="button"
                      onClick={() => setIsOpen(false)}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </Dialog.Title>

                  <p className="pt-4 text-base font-bold flex items-center justify-start">
                    <BriefcaseIcon className="h-4 fill-current text-cyan-700 pr-4" />
                    Lorem
                  </p>
                  <p className="pt-2 text-xs lg:text-sm flex items-center justify-start">
                    <MapPinIcon className="h-4 fill-current text-cyan-700 pr-4" />
                    Lorenn
                  </p>

                  <p className="pt-8 text-sm">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi labore tempora rem voluptatem, exercitationem dolore beatae tempore aut totam amet quasi doloribus nisi explicabo quod quos provident maxime consequuntur placeat!
                  </p>

                  <div className="py-4 lg:w-full mx-auto flex flex-nowrap justify-between ">
                    <ProfileLinks />
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

export default Modal;
