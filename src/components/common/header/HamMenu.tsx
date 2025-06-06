import React from 'react'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { ChevronLeft, Menu } from 'lucide-react'
import { navs } from '@/utils/routes/navs'
import Link from 'next/link'
import Logo from '../texts/logo/Logo'

const HamMenu = () => {
  return (
    <Sheet>
      <SheetTrigger> <Menu size={32} className='cursor-pointer text-gold' /> </SheetTrigger>
      <SheetContent>
        <SheetHeader className='my-[50px] flex flex-col gap-8'>
          <SheetTitle className='w-full flex justify-between'>
            <Logo />
          </SheetTitle>
          <SheetDescription className='flex flex-col gap-4 w-full'>
            {navs.map(({ label, href }, idx) => (
              <Link href={href} key={idx} className='text-base w-full hover:bg-secondary rounded-2xl px-4 py-2 flex justify-between' >
                <span> {label} </span>
                <ChevronLeft />
              </Link>
            ))}
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  )
}

export default HamMenu
