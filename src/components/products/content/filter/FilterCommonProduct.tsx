'use client'
import { Book, Coins, Gem, Palette, Printer } from 'lucide-react'
import { splitNumber } from '@/utils/helper/split-number'
import { Slider } from '@/components/ui/slider'
import { getCategories } from '@/utils/services/api/categories/getCategories'
import { ICategory } from '@/types/category-type/category-type'
import React, { useEffect, useState } from 'react'
import { getWeights } from '@/utils/services/api/weights/weights'
import { IWeight } from '@/types/weight-type/weight-type'
import { IColors } from '@/types/colors-type/colors-type'
import { getColors } from '@/utils/services/api/colors/getColors'
import { getConstructionTypes } from '@/utils/services/api/construction_type/construction_type'
import { IConstructionType } from '@/types/construction-type/contrcution-type'
import { ICarats } from '@/types/carats-type/carats-type'
import { getCarats } from '@/utils/services/api/carats/getCarats'
import CommonSelect from '@/components/common/select/CommonSelect'

const FilterCommonProduct = () => {

    const [categories, setCategories] = useState<ICategory[]>([])
    const [weights, setWeights] = useState<IWeight[]>([])
    const [colors, setColors] = useState<IColors[]>([])
    const [carats, setCarats] = useState<ICarats[]>([])
    const [constrictionTypes, setConstrictionTypes] = useState<IConstructionType[]>([])
    const [maxPrice, setMaxPrice] = useState<number[]>([1000000000]);
    const [minPrice, setMinPrice] = useState<number[]>([0]);

    const getCategoriesItems = async () => {
        const response = await getCategories()
        const filteredCategories = response.map(({ label, value }) => ({ label, value } as ICategory))
        setCategories(filteredCategories)
    }
    const getWeightItems = async () => {
        const response = await getWeights()
        setWeights(response)
    }
    const getColorsItems = async () => {
        const response = await getColors()
        setColors(response)
    }
    const getConstructionTypesItems = async () => {
        const response = await getConstructionTypes()
        setConstrictionTypes(response)
    }
    const getCaratsItems = async () => {
        const response = await getCarats()
        setCarats(response)
    }

    useEffect(() => {
        getConstructionTypesItems()
        getColorsItems()
        getCategoriesItems()
        getWeightItems()
        getCaratsItems()
    }, [])

    return (
        <div className='w-full h-fit rounded-2xl px-4 py-8 text-foreground/60 flex flex-col gap-4'>
            <h2 className='text-xl text-foreground'> فیلتر ها </h2>
            <div className='flex flex-col gap-2 w-full text-sm'>
                <label htmlFor='search' > جستجو: </label>
                <input id='search' className='border-2 border-foreground/60 px-4 outline-0 py-1.5 rounded-lg placeholder:text-foreground/40 ' placeholder=' نام محصول را جستجو کنید ' />
            </div>
            <CommonSelect id='categories' items={categories} placeholder=' نوع محصول خود را انتخاب کنید ' label=' نوع محصول: ' icon={<Book size={20} />} />
            <CommonSelect id='carats' items={carats} placeholder=' عیار را انتخاب کنید ' label=' عیار: ' icon={<Gem size={20} />} />
            <CommonSelect id='weights' items={weights} placeholder=" وزن طلای خود را انتخاب کنید " label=' وزن: ' icon={<Coins size={20} />} />
            <CommonSelect id='colors' items={colors} placeholder=" رنگ طلا را انتخاب کنید " label=' رنگ: ' icon={<Palette size={20} />} />
            <CommonSelect id='constrictionTypes' items={constrictionTypes} placeholder="  نوع ساخت را انتخاب کنید " label=' نوع ساخت: ' icon={<Printer size={20} />} />
            <div className='flex flex-col gap-2 w-full text-sm'>
                <label htmlFor='search' className='w-full flex justify-between' > <span> حداقل قیمت: </span> <span> {splitNumber(minPrice[0])} </span> </label>
                <Slider value={minPrice} onValueChange={(value) => setMinPrice(value)} max={1000000000} step={1000000} />
            </div>
            <div className='flex flex-col gap-2 w-full text-sm'>
                <label htmlFor='search' className='w-full flex justify-between' > <span> حداکثر قیمت: </span> <span> {splitNumber(maxPrice[0])} </span> </label>
                <Slider value={maxPrice} onValueChange={(value) => setMaxPrice(value)} max={1000000000} step={1000000} />
            </div>
        </div>
    )
}

export default FilterCommonProduct
