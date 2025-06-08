import React from 'react'
import InfoProducts from './info/InfoProducts'
import ProductContent from './content/ProductContent'

const Products = () => {
  return (
    <div className='flex flex-col gap-16 items-center mb-[50px] px-8'>
      <InfoProducts />
      <ProductContent />
    </div>
  )
}

export default Products
