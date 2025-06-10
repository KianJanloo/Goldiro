import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { ICommonSelect } from '@/types/select-type/select-type'
import React, { FC } from 'react'

const CommonSelect: FC<ICommonSelect> = ({ label, placeholder, items, icon, id }) => {
    return (
        <div className='flex flex-col gap-2 w-full text-sm'>
            <label htmlFor={id} > {label} </label>
            <Select>
                <SelectTrigger id={id} className="flex w-full gap-2 border-foreground/60 border-2 px-4 py-2 flex-row-reverse">
                    <div className='flex gap-2 flex-row-reverse items-center'>
                        {icon}
                        <SelectValue placeholder={placeholder} />
                    </div>
                </SelectTrigger>
                <SelectContent className='bg-secondary border-0 text-foreground'>
                    <SelectItem value='all'> همه </SelectItem>
                    {items.map((item, idx) => (
                        <SelectItem value={String(item.value)} key={idx}> {item.label} </SelectItem>
                    ))}
                </SelectContent>
            </Select>
        </div>
    )
}

export default CommonSelect
