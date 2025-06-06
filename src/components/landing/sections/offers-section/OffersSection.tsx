import CommonButton from '@/components/common/buttons/CommonButton'
import ProductSlider from '@/components/common/sliders/ProductSlider'
import SubTitle from '@/components/common/texts/subTitle/SubTitle'
import Title from '@/components/common/texts/title/Title'
import { BadgePercent, ChevronLeft } from 'lucide-react'
import React from 'react'

const OffersSection = () => {
    return (
        <div className='flex flex-col gap-8 w-full items-center'>
            <div className='flex justify-between w-full max-md:flex-col px-8 items-center max-md:justify-center gap-4 '>
                <div className='flex flex-col gap-2 max-md:items-center '>
                    <div className='flex gap-2 items-center'>
                        <Title text=' بهترین تخفیف ها ' />
                        <BadgePercent className='text-gold' />
                    </div>
                    <SubTitle text=' در اینجا بهترین تخفیف های به صرفه و باورنکردی را می توانید مشاهده فرمایید. ' />
                </div>
                <CommonButton title=' مشاهده همه ' icon={<ChevronLeft size={16} />} className='bg-gold text-gold-foreground h-fit' />
            </div>
            <ProductSlider discount={50} />
        </div>
    )
}

export default OffersSection
