import Image from 'next/image'
import React from 'react'
import HeroSectionBanner from '@/assets/hero-section.jpg'
import FirstDetail from './FirstDetail'
import SecondDetail from './SecondDetail'

const HeroSection = () => {
  return (
    <div className='w-full absolute top-0'>
      <Image
        src={HeroSectionBanner}
        alt=' '
        className='w-full h-[500px] md:h-[700px] lg:h-[900px] object-cover -z-10'
      />
      <FirstDetail />
      <SecondDetail />
    </div>
  )
}

export default HeroSection
