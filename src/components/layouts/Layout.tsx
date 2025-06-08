'use client'
import React from 'react'
import Header from '../common/header/Header'
import Footer from '../common/footer/Footer'
import usePath from '@/utils/hooks/usePathname'

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {

    const pathname = usePath()
    const checkPath = pathname.includes("auth")
    
    return (
        <div className="flex flex-col h-full gap-4 w-full overflow-x-hidden">
            {!checkPath && <Header />}
            <div className="w-full">
                {children}
            </div>
            {!checkPath && <Footer />}
        </div>
    )
}

export default Layout
