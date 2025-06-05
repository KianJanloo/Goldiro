'use client'
import { navs } from '@/utils/routes/navs'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const Navbar = () => {

  const pathName = usePathname();

  return (
    <div className='flex gap-4 text-sm'>
      {navs.map((nav, idx) => (
        <Link className={` ${pathName === nav.href ? "text-gold" : "hover:text-foreground/70 transition-all duration-300 " } `} href={nav.href} key={idx}> {nav.label} </Link>
      ))}
    </div>
  )
}

export default Navbar
