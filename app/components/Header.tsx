import React from 'react'
import Image from "next/image"
import Link from "next/link"
import {
  AiOutlineSearch,
  AiOutlineShopping
}from "react-icons/ai"


function Header() {
  return (
   <header className='main sticky top-0 z-30 flex w-full items-center justify-between bg-orange-300 p-4'>
    <div className='flex items-center justify-center md:w-1/5'>
      <Link href={"/"}>
        <div className='relative h-18 w-5 cursor-pointer opacity-75 transition hover:opacity-100'>
             <h1 className='font-SF Fedora text-black'>Beatsbymaad</h1>
      </div>
      </Link>
    </div>
    <div className=" head hidden flex-1 items-center justify-center space-x-28 md:flex">
    <a className='headerLink font-sans '>Service</a>
    <a className='headerLink font-sans'>Account</a>
     <a className='headerLink font-sans'>Beats</a>
    </div>

<div className='flex items-center justify-center gap-x-4 md:w-1/5'>
    <AiOutlineSearch className='headerIcon' />
    <Link href="/checkout">
    <div className='relative cursor-pointer'>
       <span className='absolute -right-1 -top-1 z-50 flex h-4 w-4 items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-violet-500 text-[10px] text-white'>
        5
       </span>
       <AiOutlineShopping className='headerIcon'/>
    </div>
    </Link>
    </div>
   </header>
  )
}

export default Header
