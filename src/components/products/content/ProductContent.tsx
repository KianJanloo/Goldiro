import React from 'react'
import ProductFilter from './filter/ProductFilter'
import ProductSort from './sort/ProductSort'
import ProductList from './list/ProductList'
import DialogProduct from './dialog/DialogProduct'

const ProductContent = () => {
  return (
    <div className='w-full flex justify-between gap-4 rounded-2xl'>
      <div className='flex flex-col gap-4 w-9/12 max-xl:w-full '>
        <ProductSort />
        <div className='max-md:block mx-auto hidden'>
                <DialogProduct />
            </div>
        <ProductList />
      </div>
      <ProductFilter />
    </div>
  )
}

export default ProductContent
