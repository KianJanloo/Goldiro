'use client'
import CommonButton from '@/components/common/buttons/CommonButton'
import DetailBox from '@/components/common/detail-box/DetailBox'
import { splitNumber } from '@/utils/helper/split-number'
import { calculateGoldPrice, calculateFinalPrice } from '@/utils/services/api/gold-price/getGoldPrice'
import { Gem, Palette, PlusCircle, Coins, Printer } from 'lucide-react'
import React, { useEffect, useState } from 'react'

const InformationTab = () => {
    const [price, setPrice] = useState<{ base: number, final: number }>({ base: 0, final: 0 })

    useEffect(() => {
        const weight = 6
        const carat = 18
        const basePrice = calculateGoldPrice(weight, carat)
        const finalPrice = calculateFinalPrice(basePrice)
        setPrice({ base: basePrice, final: finalPrice })
    }, [])

    const details = [
        { title: " وزن ", description: " 6 گرم ", icon: Coins },
        { title: " عیار ", description: " 18 عیار", icon: Gem },
        { title: " رنگ ", description: " طلای زرد ", icon: Palette, color: "#F8C600" },
        { title: " نوع ساخت ", description: " ماشینی ", icon: Printer }
    ]

    return (
        <div className='w-full flex flex-col gap-4'>
            <div className='flex flex-col gap-2'>
                <h2 className='text-2xl'> عنوان محصول </h2>
                <span className='text-foreground/60 line-clamp-2' > این توصحیات برای تست است و فقط فقط برای تست است پس فکر نکن که این واقعی است اینم برای پر شدن این توضیحات است هه. این توصحیات برای تست است و فقط فقط برای تست است پس فکر نکن که این واقعی است اینم برای پر شدن این توضیحات است هه. </span>
            </div>
            <div className='flex gap-4'>
                <div className='bg-foreground text-gold-foreground text-sm rounded-2xl px-4 py-0.5'>  ساعت  </div>
                <div className='bg-foreground text-gold-foreground text-sm rounded-2xl px-4 py-0.5'>  رولکس  </div>
            </div>
            <div className='flex flex-col gap-4 mt-4'>
                {details.map(({ description, icon: Icon, title, color }, idx) => (
                    <DetailBox color={color} description={description} title={title} key={idx} icon={<Icon size={16} />} />
                ))}
            </div>
            <div className='flex bg-secondary rounded-2xl px-4 py-2 justify-between w-full gap-4 flex-wrap mt-4 items-center'>
                <div className='flex flex-col'>
                    <span className='line-through text-foreground/60'> {splitNumber(price.base)} ت </span>
                    <span className='text-gold text-2xl'> {splitNumber(price.final)} ت </span>
                </div>
                <CommonButton title=' خرید محصول ' icon={<PlusCircle size={20} />} className='bg-gold text-gold-foreground h-fit' />
            </div>
        </div>
    )
}

export default InformationTab
