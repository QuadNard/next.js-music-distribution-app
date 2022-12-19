import Link from 'next/link'
import {AiOutlineSearch, AiOutlineShopping } from 'react-icons/ai'
import React from 'react'

export default function Navbar() {
  return (
  <nav className="sticky top-0 z-30 flex w-full items-center justify-between p-4">
   <div className="flex items-center justify-center md:w-1/5">
    <Link href={"/"}>
      <div className="relative h-10 w-5 cursor-pointer opacity-75 transition hover:opacity-100">
         <h1 className="font-SF Fedora text-2xl text-black">Beatsbymaad</h1>
      </div>
    </Link>
   </div>
   <div className="hidden flex-1 items-center justify-around space-x-8  md:flex font-sans text-black transition duration-[.4s] hover:text-[#b3b3b3]"> 
    <Link href={"/service"}>Service</Link>
    <Link href={"/account"}>Account</Link>
    <Link href={"/beats"}>Beats</Link>
   </div>
        <div className="flex items-center justify-center gap-x-4 md:w-1/5">
          <AiOutlineSearch className="navIcon" />
          <Link href={"/checkout"}>
            <div className="relative cursor-pointer">
              <span className="absolute -right-1 top-1 z-50 flex h-4 w-4 items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-violet-500">
                5
              </span>
              <AiOutlineShopping className="navIcon"/>
            </div>
          </Link>
        </div>
      
   
  </nav>
  )
}

