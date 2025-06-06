/* eslint-disable */

import React, { FC } from 'react'
import CommonButton from '../buttons/CommonButton'
import { splitNumber } from '@/utils/helper/split-number'
import { ChevronLeft } from 'lucide-react'
import { IProductCard } from '@/types/card-type/card-type'

const ProductCard: FC<IProductCard> = ({ discount }) => {

    const DiscountPrice = splitNumber((discount * 18000000) / 100)
    const NormalPrice = splitNumber(18000000)

    return (
        <div className='flex flex-col gap-4 w-full'>
            <div className='bg-secondary/60 w-[100%] h-[200px] p-4 rounded-2xl'>
                <img src={" "} alt='' className='rounded-2xl w-full h-full bg-secondary flex justify-center items-center' />
            </div>
            <div className='flex flex-col gap-2 w-full'>
                <div className='flex w-full justify-between flex-wrap gap-2'>
                    <h2 className='text-lg'> ساعت رولکس B46 </h2>
                    {discount && <div className='bg-danger text-danger-foreground px-4 py-0.5 text-base rounded-2xl flex justify-center items-center'> {discount}% </div>}
                </div>
                <span className='text-foreground/60 text-sm w-full line-clamp-2'>
                    یکی از بهترین ساعت های رولکس مردونه زنونه در سرار جهان که در سال 2024 تولید شده است.
                </span>
            </div>
            <div className='flex gap-4'>
                <div className='bg-foreground text-gold-foreground text-sm rounded-2xl px-4 py-0.5'>  ساعت  </div>
                <div className='bg-foreground text-gold-foreground text-sm rounded-2xl px-4 py-0.5'>  رولکس  </div>
            </div>
            <div className='w-full flex max-md:flex-col gap-4 justify-between md:items-end'>
                <div className='flex flex-col gap-1'>
                    {discount && <span className='text-xs text-foreground/60 line-through '> {NormalPrice} </span>}
                    <h2 className='text-xl max-md:text-lg'> {discount ? DiscountPrice : NormalPrice} ت </h2>
                </div>
                <CommonButton icon={<ChevronLeft size={16} />} title=' مشاهده ' className='bg-gold text-gold-foreground py-1 max-md:w-full max-md:justify-center max-md:text-sm' />
            </div>
        </div>
    )
}

export default ProductCard
