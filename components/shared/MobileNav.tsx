
"use client"

import {Sheet,SheetContent,SheetTrigger,} from "@/components/ui/sheet"
import { navLinks } from "@/constants"
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import Image from "next/image"
import Link from 'next/link'
import { usePathname } from "next/navigation"
import { Button } from "../ui/button"

const MobileNav = () => {
    const pathname = usePathname()
  return (
    <header className="header">
        <Link href= "/" className="flex items-center gap-2 md:py-2"> 
        <Image 
        src= "/assets/images/logo-text.svg"
        alt = "logo"
        width = {180}
        height= {28}
        />

        </Link>
        <nav className="flex gap-2">
            <SignedIn>
                <UserButton afterSignOutUrl="/"/>
                <Sheet>
                <SheetTrigger>
                    <Image 
                    src = "/assets/icons/menu.svg"
                    
                    alt = "menu"
                    width = {32}
                    height = {32}
                    className="cursor-pointer"
                    />
                </SheetTrigger>
                <SheetContent className="sheet-content sm:w-64">
                    <>
                    <Image 
                    src = "/assets/images/logo-text.svg"
                    alt = "logo"
                    width = {152}
                    height = {23}
                    className="cursor-pointer"
                    />
                    <ul className='header-nav_elements'>


{/**we want to map over the navLinks array and render the links  navlinks provide kiya gya hai hmari root se index.ts*/}
{navLinks.map((link) => {

    {/**agr link.route  == pathname hai mtlb jis link pe hm hai agr vo link path name se match kr ra vo purple ho jaye like home pe hai vha home toh home active hai toh vo purple ho jayega*/}
    const isActive = link.route === pathname

    return(
        <li 

        className={`${isActive && 'gradient-text'} p-18 flex whitespace-nowrap text-dark-700`} key = {link.route}>
            <Link className="sidebar-link cursor-pointer" href={link.route}>
            <Image 
                src={link.icon}
                alt="logo"
                width={24}
                height={24}
                
            />
            {link.label}
            </Link>

            </li>
            )
            })} 
            </ul>

                                        
                    
                </>
                </SheetContent>
                </Sheet>

            </SignedIn>
            <SignedOut>
          {/**as child means it will be rendered as a link and we want it  */}
          <Button asChild  className='button bg-purple-gradient bg-cover'>
            <Link href="/sign-in">Log-in</Link>
          </Button>

        </SignedOut>

        </nav>

    </header>
  )
}

export default MobileNav