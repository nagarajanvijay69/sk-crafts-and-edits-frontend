'use client'
import { useState } from "react"
import Link from "next/link";

const Navbar = () => {
     const [Nav, setNav] = useState<boolean>(false);

     const toggle = (): void => {
          if (innerWidth <= 1025) setNav(!Nav);
          // console.log(Nav);
          // console.log(innerWidth);
     }

     return <>
          <div className="nav-body bg-gradient-to-r from-gray-800 to-gray-500 text-white flex z-10 h-18 items-center justify-between px-5 relative w-[100dvw]">
                    <h1 className="text-2xl font-semibold text-brown-500 flex z-10"><Link href='/'>Sk Edits and Crafts</Link></h1>
               <ul className={`flex gap-5 z-0 flex-col lg:flex-row absolute lg:static pl-5 lg:pl-0 h-60 lg:h-auto ${Nav ? 'top-[80px] left-[0px] gap-7 pt-7  text-white bg-gradient-to-r from-gray-800 to-gray-500 w-[100dvw] duration-500' : 'top-[-200px]'}`}>
                    <Link href="/"><li onClick={toggle}>Home</li></Link>
                    <Link href="/products"><li onClick={toggle}>Products</li></Link>
                    <Link href="/about"><li onClick={toggle}>About</li></Link>
                    <Link href="/contact"><li onClick={toggle}>Contact</li></Link>
               </ul>
               <div className="flex flex-col z-10">
                    <p className="opacity-[0] hidden lg:block">*******************</p>
                    <img src={Nav ? './close.svg' : './menu.svg'} className={`cursor-pointer lg:hidden ${Nav ? 'size-[40px]' : 'size-[40px]'}`} onClick={toggle} />
               </div>
          </div>
     </>
}

export default Navbar
