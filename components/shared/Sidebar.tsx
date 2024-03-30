// "use client" 
//  {/**this converts server side renddering by default  to client side  vrna error aa jayega*/}

// import React from 'react'
// import Link from 'next/link'
// import Image from 'next/image'
// import { SignedIn , SignedOut, UserButton } from '@clerk/nextjs'
// import { navLinks } from '@/constants/index'

// import { usePathname } from 'next/navigation'
// import { Button } from '../ui/button'
// const Sidebar = () => {
//     {/**Use pathname is a Hook Provided to us By next/navigation it is The usePathname hook is a handy tool in Next.js for client-side components that allows you to access the current URL's pathname within your component. */}
//     const pathname = usePathname()
//   return (
//     <aside className='sidebar'>
//         <div className='flex size-full flex-col gap-4'>
//         < Link href = "/" className = "sidebar-logo">
//             <Image src = "/assets/images/logo-text.svg" alt='logo' width = {180} height = {28}/>
//         </Link>

//     <nav className="sidebar-nav">
//         {/* //we want to show the sidebar only if signed in so we will use signed in froim clerk  */}
//         <SignedIn>
//             <ul className='sidebar-nav_elements'>


//                 {/**we want to map over the navLinks array and render the links  navlinks provide kiya gya hai hmari root se index.ts*/}
//                 {navLinks.slice(0,6).map((link) => {

//                     {/**agr link.route  == pathname hai mtlb jis link pe hm hai agr vo link path name se match kr ra vo purple ho jaye like home pe hai vha home toh home active hai toh vo purple ho jayega*/}
//                     const isActive = link.route === pathname

//                     return(
//                         <li key = {link.route} className={`sidebar-nav_element group ${isActive ? "bg-purple-gradient text-white" : "text-gray-700"}`}>
//                             <Link className="sidebar-link" href={link.route}>
//                       <Image 
//                         src={link.icon}
//                         alt="logo"
//                         width={24}
//                         height={24}
//                         className={`${isActive && 'brightness-200'}`}
//                       />
//                       {link.label}
//                     </Link>

//                     </li>
//                     )




//                     })} 
//                      </ul>



//                       <ul className='sidebar-nav_elements'> 
//                       <br/>
//                       {navLinks.slice(6).map((link) => {

//                     {/**agr link.route  == pathname hai mtlb jis link pe hm hai agr vo link path name se match kr ra vo purple ho jaye like home pe hai vha home toh home active hai toh vo purple ho jayega*/}
//                     const isActive = link.route === pathname

//                     return(
//                         <li key = {link.route} className={`sidebar-nav_element group ${isActive ? "bg-purple-gradient text-white" : "text-gray-700"}`}>
//                             <Link className="sidebar-link" href={link.route}>
//                       <Image 
//                         src={link.icon}
//                         alt="logo"
//                         width={24}
//                         height={24}
//                         className={`${isActive && 'brightness-200'}`}
//                       />
//                       {link.label}
//                     </Link>

//                     </li>
//                     )




//                     })} 
                     

//                     <li className='flex-center cursor-default gap-2 p-4'>
//                       {/**User button is a clerk component  */}
//                       <UserButton afterSignOutUrl='/' showName/>
//                     </li>






//             </ul>
//         </SignedIn>


//         <SignedOut>
//           {/**as child means it will be rendered as a link and we want it  */}
//           <Button asChild  className='button bg-purple-gradient bg-cover'>
//             <Link href="/sign-in">Log-in</Link>
//           </Button>

//         </SignedOut>








//     </nav>

//     </div>
//     </aside>
//   )
// }
  

// export default Sidebar





"use client"

import { navLinks } from '@/constants'
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '../ui/button'

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="sidebar">
      <div className="flex size-full flex-col gap-4">
        <Link href="/" className="sidebar-logo">
          <Image src="/assets/images/logo-text.svg" alt="logo" width={180} height={28} />
        </Link>

        <nav className="sidebar-nav">
          <SignedIn>
            <ul className="sidebar-nav_elements">
              {navLinks.slice(0, 6).map((link) => {
                const isActive = link.route === pathname

                return (
                  <li key={link.route} className={`sidebar-nav_element group ${
                    isActive ? 'bg-purple-gradient text-white' : 'text-gray-700'
                  }`}>
                    <Link className="sidebar-link" href={link.route}>
                      <Image 
                        src={link.icon}
                        alt="logo"
                        width={24}
                        height={24}
                        className={`${isActive && 'brightness-200'}`}
                      />
                      {link.label}
                    </Link>
                  </li>
                )
              })}
              </ul>


            <ul className="sidebar-nav_elements">
              {navLinks.slice(6).map((link) => {
                const isActive = link.route === pathname

                return (
                  <li key={link.route} className={`sidebar-nav_element group ${
                    isActive ? 'bg-purple-gradient text-white' : 'text-gray-700'
                  }`}>
                    <Link className="sidebar-link" href={link.route}>
                      <Image 
                        src={link.icon}
                        alt="logo"
                        width={24}
                        height={24}
                        className={`${isActive && 'brightness-200'}`}
                      />
                      {link.label}
                    </Link>
                  </li>
                )
              })}

              <li className="flex-center cursor-pointer gap-2 p-4">
                <UserButton afterSignOutUrl='/' showName />
              </li>
            </ul>
          </SignedIn>

          <SignedOut>
            <Button asChild className="button bg-purple-gradient bg-cover">
              <Link href="/sign-in">Login</Link>
            </Button>
          </SignedOut>
        </nav>
      </div>
    </aside>
  )
}

export default Sidebar