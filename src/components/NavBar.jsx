'use client'
import Link from 'next/link'

export default function NavBar({ handleMenu }) {
  return (
    <nav className="fixed z-20 flex h-[100vh] w-[100vw] flex-col items-center justify-center gap-10 bg-gray-300 font-bold dark:bg-black ">
      <Link
        href="/sobre"
        className="border-b-2 border-solid border-y-white p-2 text-3xl text-pink-500 hover:text-pink-400 "
        onClick={handleMenu}
      >
        Sobre
      </Link>

      <Link
        href="/projetos"
        className=" border-b-2 border-solid border-y-white p-2 text-3xl text-pink-500 hover:text-pink-400"
        onClick={handleMenu}
      >
        Projetos
      </Link>

      <Link
        href="/contato"
        className=" border-b-2 border-solid border-y-white p-2 text-3xl text-pink-500 hover:text-pink-400"
        onClick={handleMenu}
      >
        Contato
      </Link>
    </nav>
  )
}
