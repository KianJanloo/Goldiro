import React from 'react'
import HeroSection from './sections/hero-section/HeroSection'
import Categories from './sections/categories/Categories'

const Landing = () => {
  return (
    <div className='flex flex-col gap-16 pb-[100px] absolute top-0 w-full'>
      <HeroSection />
      <Categories />
    </div>
  )
}

export default Landing
