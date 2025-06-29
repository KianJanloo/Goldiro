'use client'
import ProductCard from '@/components/common/cards/ProductCard'
import { BlurFade } from '@/components/ui/blur-fade'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import React, { useState } from 'react'
import ReactPaginate from 'react-paginate'

const ProductList = () => {
    const [currentPage, setCurrentPage] = useState<number>(1)

    return (
        <div className='flex flex-col gap-32 items-center'>
            <div className=' w-full grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-4 flex-wrap'>
                {Array.from({ length: 8 }).map((_, idx) => (
                    <BlurFade delay={idx * 0.2} key={idx} className='col-span-1'>
                        <ProductCard />
                    </BlurFade>
                ))}
            </div>
            <ReactPaginate
                pageCount={100}
                onPageChange={({ selected }) => {
                    setCurrentPage(selected + 1)
                    window.location.hash = '#'
                }}
                previousLabel={<ChevronRight />}
                nextLabel={<ChevronLeft />}
                breakLabel="..."
                containerClassName="flex gap-2 items-center"
                previousLinkClassName='cursor-pointer'
                nextLinkClassName='cursor-pointer'
                pageLinkClassName="cursor-pointer bg-secondary text-foreground px-4 py-2 rounded-2xl"
                activeLinkClassName="text-gold"
                marginPagesDisplayed={1}
                pageRangeDisplayed={1}
            />
        </div>
    )
}

export default ProductList
