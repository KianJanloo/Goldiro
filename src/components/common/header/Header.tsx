import React from 'react'
import Container from '../container/Container'
import LoginButton from './LoginButton'
import Navbar from './Navbar'
import { Irish_Grover } from 'next/font/google'
// import ThemeButton from './ThemeButton'

const irishGrover = Irish_Grover({
    subsets: ['latin'],
    weight: '400',
})

const Header = () => {
    return (
        <Container className='z-[2]' >
            <div className={`w-full px-2 py-1 my-[24px] flex gap-4 justify-between items-center`}>
                <div className={` ${irishGrover.className} text-gold text-3xl cursor-pointer `}> Goldiro </div>
                <Navbar />
                <div className='flex gap-4 items-center'>
                    {/* <ThemeButton /> */}
                    <LoginButton />
                </div>
            </div>
        </Container>
    )
}

export default Header
