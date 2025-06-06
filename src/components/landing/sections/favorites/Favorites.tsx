import ProductSlider from '@/components/common/sliders/ProductSlider'
import SubTitle from '@/components/common/texts/subTitle/SubTitle'
import Title from '@/components/common/texts/title/Title'
import React from 'react'

const Favorites = () => {
  return (
    <div className='flex flex-col w-full gap-8 items-center'>
        <div className='flex flex-col w-full gap-2 items-center'>
            <Title text=' محبوب ترین ها ' />
            <SubTitle text=' پر طرفدار ترین و محبوب ترین محصولات گولدیرو را می توانید مشاهده کنید. مشتریان ما این محصولات را از میان دیگر محصولات برگزیدند ' />
        </div>
        <ProductSlider />
    </div>
  )
}

export default Favorites
