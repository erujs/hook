import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { Close } from '../svg/svg'

const Modal = ({
  children,
  childrenClass,
  title,
  titleClass,
  body,
}) => {
  let [isOpen, setIsOpen] = useState(false)

  return (
    <>

      {children && (
        <button type="button" onClick={() => setIsOpen(true)} className={childrenClass}>
          {children}
        </button>
      )}

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
                <Dialog.Panel className="bg-white/75 dark:bg-black/75 w-full max-w-lg transform overflow-hidden p-4 text-left align-middle shadow-2xl transition-all">
                  <Dialog.Title
                    as="h1"
                    className={"text-3xl font-bold lg:mx-0 pb-3 flex justify-between " + titleClass}
                  >
                    {title}
                    <button
                      type="button"
                      onClick={() => setIsOpen(false)}
                    >
                      <Close />
                    </button>
                  </Dialog.Title>
                  {body}
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
