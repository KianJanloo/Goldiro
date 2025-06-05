import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import { ICategory } from '@/types/category-type/category-type'
import React, { FC } from 'react'

const Category: FC<ICategory> = ({ icon, title }) => {
    return (
        <div className='my-[24px] w-[80px] h-[80px] rounded-full bg-secondary flex items-center justify-center cursor-pointer hover:bg-secondary/40 '>
            <Tooltip>
                <TooltipTrigger> {icon} </TooltipTrigger>
                <TooltipContent>
                    <p> {title} </p>
                </TooltipContent>
            </Tooltip>
        </div>
    )
}

export default Category
