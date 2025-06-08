import React from 'react'
import ProductFilter from './filter/ProductFilter'
import ProductSort from './sort/ProductSort'
import ProductList from './list/ProductList'

const ProductContent = () => {
  return (
    <div className='w-full flex justify-between gap-4 rounded-2xl'>
      <div className='flex flex-col gap-4 w-9/12'>
        <ProductSort />
        <ProductList />
      </div>
      <ProductFilter />
    </div>
  )
}

export default ProductContent
