import React from 'react'
import PhotosProduct from './photos/PhotosProduct'
import TabProduct from './tab/TabProduct'

const DetailProduct = () => {
  return (
    <div className=' w-full flex gap-8 px-8 mb-[100px] '>
      <PhotosProduct />
      <TabProduct />
    </div>
  )
}

export default DetailProduct
