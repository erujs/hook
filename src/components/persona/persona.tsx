import Link from 'next/link';
import Modal from '../modal/modal';

const Persona = () => {
  return (
    <nav className="fixed bottom-0 inset-x-0 bg-white dark:bg-black flex justify-between text-sm uppercase">
      <Link href="/">
        <button className="w-full block py-5 px-3 text-center hover:bg-cyan-700 transition duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 mb-2 mx-auto">
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
          </svg>
          HOME
        </button>
      </Link>
      <Modal />
    </nav>
  )
}

export default Persona;
