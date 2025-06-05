import Image from 'next/image'
import React from 'react'
import HeroSectionBanner from '@/assets/hero-section.jpg'
import FirstDetail from './FirstDetail'
import SecondDetail from './SecondDetail'

const HeroSection = () => {
    return (
        <div className='w-full'>
            <Image src={HeroSectionBanner || "  "} alt='' className='w-full h-[800px] -z-10 ' />
            <FirstDetail />
            <SecondDetail />
        </div>
    )
}

export default HeroSection
