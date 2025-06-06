import React from 'react'
import Container from '../container/Container'
import LoginButton from './LoginButton'
import Navbar from './Navbar'
import HamMenu from './HamMenu'
import Logo from '../texts/logo/Logo'
// import ThemeButton from './ThemeButton'

const Header = () => {
    return (
        <Container className='z-[2]' >
            <div className={`w-full px-2 py-1 my-[24px] flex gap-4 justify-between items-center `}>
                <div className='flex gap-4'>
                    <div className='md:hidden'> <HamMenu /> </div>
                    <div className='max-md:hidden'> <Logo /> </div>
                </div>
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
