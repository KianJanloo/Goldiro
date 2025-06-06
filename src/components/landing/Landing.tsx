import React from 'react'
import HeroSection from './sections/hero-section/HeroSection'
import Categories from './sections/categories/Categories'
import NewProducts from './sections/new-products/NewProducts'
import Favorites from './sections/favorites/Favorites'
import OffersSection from './sections/offers-section/OffersSection'

const Landing = () => {
  return (
    <div className='flex flex-col gap-16 pb-[100px] w-full'>
      <div className='lg:mb-[800px] md:mb-[600px] mb-[400px] '>
        <HeroSection />
      </div>
      <Categories />
      <div className='w-full px-4 py-16 bg-secondary/40 rounded-[40px] flex flex-col gap-32'>
        <NewProducts />
        <Favorites />
      </div>
      <div className='my-[40px]'>
        <OffersSection />
      </div>
    </div>
  )
}

export default Landing
