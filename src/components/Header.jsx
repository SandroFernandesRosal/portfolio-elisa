'use client'

import ChangeTheme from './ChangeTheme'
import { AiOutlineClose } from 'react-icons/ai'
import { GiHamburgerMenu } from 'react-icons/gi'
import NavBar from './NavBar'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo1 from '../../public/images/logo10.png'

export default function Header() {
  const [menu, setMenu] = useState(false)

  const handleMenu = () => {
    menu === false ? setMenu(true) : setMenu(false)
  }

  return (
    <>
      <header className="fixed z-30 flex h-20  w-full items-center justify-evenly overflow-hidden border-b-2 border-solid  border-y-black bg-pink-500 text-white dark:border-y-pink-900  dark:bg-black ">
        <Link href="/">
          <Image
            src={logo1}
            alt="Logo"
            width={65}
            height={65}
            onClick={() => setMenu(false)}
            className="flex  cursor-pointer flex-col items-center justify-center"
          />
        </Link>

        <ChangeTheme />

        <div
          onClick={handleMenu}
          className="flex h-[50px] w-[50px] cursor-pointer items-center justify-center rounded-full  border-[2px] border-white hover:bg-pink-300  dark:hover:bg-gray-800"
        >
          {menu === false ? (
            <GiHamburgerMenu className="text-[22px] text-white" />
          ) : (
            <AiOutlineClose className="text-[25px]  text-white" />
          )}
        </div>
      </header>

      {menu && <NavBar handleMenu={handleMenu} />}
    </>
  )
}
