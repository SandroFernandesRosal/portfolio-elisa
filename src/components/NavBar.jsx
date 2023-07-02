'use client'
import Link from 'next/link'

export default function NavBar({ handleMenu, menu }) {
  return (
    <nav
      className={`fixed z-20 md:static ${
        menu === true ? 'flex' : 'hidden'
      }  md:bg- h-[100vh] w-[100vw] flex-col items-center justify-center gap-10 bg-gray-300 font-Roboto font-bold dark:bg-black md:flex md:h-auto md:w-auto md:flex-row md:gap-1 md:bg-transparent`}
    >
      <Link
        href="/sobre"
        className="border-b-2 border-solid border-pink-500 p-2 text-3xl hover:text-pink-400 md:border-b-0 md:text-sm md:hover:border-b-2 md:hover:text-pink-600"
        onClick={handleMenu}
      >
        Sobre
      </Link>

      <Link
        href="/servicos"
        className=" border-b-2 border-solid  border-pink-500 p-2 text-3xl hover:text-pink-400  md:border-b-0 md:text-sm md:hover:border-b-2 md:hover:text-pink-600"
        onClick={handleMenu}
      >
        Serviços
      </Link>

      <Link
        href="/contato"
        className=" border-b-2 border-solid  border-pink-500 p-2 text-3xl hover:text-pink-400 md:border-b-0 md:text-sm  md:hover:border-b-2 md:hover:text-pink-600"
        onClick={handleMenu}
      >
        Contato
      </Link>
    </nav>
  )
}
