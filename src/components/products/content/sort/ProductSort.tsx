'use client'
import React, { useState } from 'react'

const sorts = [
    { label: " جدید ترین ها ", value: "last_updated", sort: "DESC" },
    { label: " محبوب ترین ها ", value: "rating", sort: "DESC" },
    { label: " ارزان ترین ها ", value: "price", sort: "ASC" },
]

const ProductSort = () => {
    const [selected, setSelected] = useState<string | null>(null)

    const handleRemove = () => setSelected(null)

    return (
        <div className='w-full bg-secondary px-4 py-2 rounded-2xl flex items-center gap-4'>
            <h2> ترتیب </h2>
            <span> | </span>
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
    )
}

export default ProductSort
