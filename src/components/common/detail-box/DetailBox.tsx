import { IDetailBox } from '@/types/detail-box-type/detail-box-type'
import React, { FC } from 'react'

const DetailBox: FC<IDetailBox> = ({ title, description, icon, color }) => {
    return (
        <div className='flex gap-4 items-center'>
            <div className='flex gap-2 text-foreground/60 items-center'> {icon} <span> {title}: </span> </div>
            <span> {description} </span>
            {color && <div className='rounded-2xl size-[20px]' style={{ backgroundColor: color }} />}
        </div>
    )
}

export default DetailBox
