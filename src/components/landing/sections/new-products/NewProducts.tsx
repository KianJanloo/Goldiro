import ProductSlider from '@/components/common/sliders/ProductSlider'
import SubTitle from '@/components/common/texts/subTitle/SubTitle'
import Title from '@/components/common/texts/title/Title'
import React from 'react'

const NewProducts = () => {
  return (
    <div className='flex flex-col gap-8 w-full items-center'>
      <div className='flex flex-col gap-2 w-full items-center'>
        <Title text=' جدیدترین محصولات ' />
        <SubTitle text=' بهترین محصولات گولیرو که جدیدا به دستمان رسیده است را می توانید مشاهده کنید. ' />
      </div>
      <ProductSlider />
    </div>
  )
}

export default NewProducts
