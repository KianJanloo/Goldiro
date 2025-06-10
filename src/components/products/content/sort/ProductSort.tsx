'use client'
import React, { useState } from 'react'
import DialogProduct from '../dialog/DialogProduct'
import { BlurFade } from '@/components/ui/blur-fade'

export const sorts = [
    { label: " جدید ترین ها ", value: "last_updated", sort: "DESC" },
    { label: " محبوب ترین ها ", value: "rating", sort: "DESC" },
    { label: " ارزان ترین ها ", value: "price", sort: "ASC" },
]

const ProductSort = () => {
    const [selected, setSelected] = useState<string | null>(null)

    const handleRemove = () => setSelected(null)

    return (
        <BlurFade initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }} className='w-full max-md:hidden bg-secondary px-4 py-2 rounded-2xl flex flex-wrap justify-between items-center gap-4'>
            <div className='flex gap-4'>
                <h2 className='max-md:hidden'> ترتیب </h2>
                <span className='max-md:hidden'> | </span>
                {sorts.map((sort, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                        <input
                            name='sort'
                            id={`sort${idx}`}
                            className='peer hidden'
                            type='radio'
                            checked={selected === sort.value}
                            onChange={() => setSelected(sort.value)}
                        />
                        <label
                            htmlFor={`sort${idx}`}
                            className={`px-4 py-1 rounded-full border outline-0 bg-transparent cursor-pointer text-sm placeholder:text-white peer-checked:bg-red-500 peer-checked:text-white peer-checked:border-red-500 transition-colors ${selected === sort.value ? 'bg-red-500 text-white border-red-500' : ''}`}
                        >
                            {sort.label}
                        </label>
                    </div>
                ))}
                {selected && (
                    <div className='flex gap-4'>
                        <span> | </span>
                        <button
                            type="button"
                            onClick={handleRemove}
                            className="ml-2 text-xs text-foreground/60 hover:text-danger"
                        >
                            حذف
                        </button>
                    </div>
                )}
            </div>
            <div className='max-xl:block hidden'>
                <DialogProduct />
            </div>
        </BlurFade>
    )
}

export default ProductSort
