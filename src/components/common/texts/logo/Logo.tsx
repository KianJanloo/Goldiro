import { irishGrover } from '@/utils/fonts/CustomFont'
import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
    <Link href={"/"} className={` ${irishGrover.className} text-gold text-3xl  max-md:text-2xl cursor-pointer `}> Goldiro </Link>
  )
}

export default Logo
