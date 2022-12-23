'use client'

import Link from 'next/link'
import {AiOutlineSearch, AiOutlineShopping } from 'react-icons/ai'
import {MdAccountBox} from 'react-icons/md'
import { useEffect, useState } from 'react'

function Header() {
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }

    }, [])

    return (
        <header className={`${isScrolled && ' bg-gradient-to-r  from-orange-300 to-orange-500'}`} >
            <div  className="flex items-center space-x-2 md:space-x-10">
                        <h1 className="cursor-pointer object-contain text-2xl font-SF Fedora text-black">Beatsbymaad</h1>
            
            <ul className="hidden flex-1 items-center  space-x-8 md:flex">
                <li className="headerLink">Home</li>
                <li className="headerLink">Beats Vault</li>
                <li className="headerLink">Services</li>
                <li className="headerLink">Account</li>
            </ul>
            </div>

                <div className="flex items-center space-x-4 text-sm">
                    <AiOutlineSearch className='hidden h-6 w-6 sm:inline text-white' />
                    <Link href={"/checkout"}>
                        <div>
                            {/*for notification number */}
                            <AiOutlineShopping className='h-6 w-6  text-white' />
                        </div>
                    </Link>
                    <Link href={ "/account"} className="cursor-pointer rounded">
                        <MdAccountBox className="h-6 w-6 text-white" />
                    </Link>
                </div>
        </header>
    )
}

export default Header