'use client'
import { getCategories } from '@/utils/services/api/landing/categories/getCategories'
import { Book, Coins } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Slider } from '@/components/ui/slider'
import { ICategory } from '@/types/category-type/category-type'
import { splitNumber } from '@/utils/helper/split-number'

const weights = [
    { title: " زیر 1 گرم " },
    { title: " بالای 1 گرم " },
    { title: " بالای 10 گرم " },
]

const ProductFilter = () => {

    const [categories, setCategories] = useState<ICategory[]>([])
    const [maxPrice, setMaxPrice] = useState<number[]>([1000000000]);
    const [minPrice, setMinPrice] = useState<number[]>([0]);

    const getItems = async () => {
        const response = await getCategories()
        const filteredCategories = response.map(({ title }) => ({ title } as ICategory))
        setCategories(filteredCategories)
    }

    useEffect(() => {
        getItems()
    }, [])

    return (
        <div className='w-3/12 bg-secondary h-fit rounded-2xl px-4 py-8 text-foreground/60 flex flex-col gap-4'>
            <h2 className='text-xl text-foreground'> فیلتر ها </h2>
            <div className='flex flex-col gap-2 w-full text-sm'>
                <label htmlFor='search' > جستجو: </label>
                <input id='search' className='border-2 border-foreground/60 px-4 outline-0 py-1.5 rounded-lg placeholder:text-foreground/40 ' placeholder=' نام محصول را جستجو کنید ' />
            </div>
            <div className='flex flex-col gap-2 w-full text-sm'>
                <label htmlFor='categories' > نوع محصول: </label>
                <Select>
                    <SelectTrigger id='categories' className="flex w-full gap-2 border-foreground/60 border-2 px-4 py-2 flex-row-reverse">
                        <div className='flex gap-2 flex-row-reverse items-center'>
                            <Book size={20} />
                        <SelectValue placeholder=" نوع محصول خود را انتخاب کنید " />
                        </div>
                    </SelectTrigger>
                    <SelectContent className='bg-secondary border-0 text-foreground'>
                        <SelectItem value='all'> همه </SelectItem>
                        {categories.map((category, idx) => (
                            <SelectItem value={category.title} key={idx}> {category.title} </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>
            <div className='flex flex-col gap-2 w-full text-sm'>
                <label htmlFor='categories' > وزن: </label>
                <Select>
                    <SelectTrigger id='categories' className="flex w-full gap-2 border-foreground/60 border-2 px-4 py-2 flex-row-reverse">
                        <div className='flex gap-2 flex-row-reverse items-center'>
                            <Coins size={20} />
                        <SelectValue placeholder=" وزن طلای خود را انتخاب کنید " />
                        </div>
                    </SelectTrigger>
                    <SelectContent className='bg-secondary border-0 text-foreground'>
                        <SelectItem value='all'> همه </SelectItem>
                        {weights.map((weight, idx) => (
                            <SelectItem value={weight.title} key={idx}> {weight.title} </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>
            <div className='flex flex-col gap-2 w-full text-sm'>
                <label htmlFor='search' className='w-full flex justify-between' > <span> حداقل قیمت: </span> <span> {splitNumber(minPrice[0])} </span> </label>
                <Slider value={minPrice} onValueChange={(value) => setMinPrice(value)} max={1000000000} step={1000000} />
            </div>
            <div className='flex flex-col gap-2 w-full text-sm'>
                <label htmlFor='search' className='w-full flex justify-between' > <span> حداکثر قیمت: </span> <span> {splitNumber(maxPrice[0])} </span> </label>
                <Slider value={maxPrice} onValueChange={(value) => setMaxPrice(value)} max={1000000000} step={1000000}  />
            </div>
        </div>
    )
}

export default ProductFilter
