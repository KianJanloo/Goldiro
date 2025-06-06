'use client'
import { ICommonButton } from '@/types/button-type/button-type';
import { redirect } from 'next/navigation';
import React, { FC } from 'react';

const CommonButton: FC<ICommonButton> = ({ className = '', title, icon, href, ...options }) => {
    return (
        <button
            onClick={() => {
                if(href){
                    redirect(href)
                }
            }}
            className={`cursor-pointer hover:scale-[1.03] transition-all duration-300 flex justify-between gap-4 items-center px-4 py-2 w-fit rounded-2xl text-sm ${className}`}
            {...options}
        >
            {title}
            {icon}
        </button>
    );
};

export default CommonButton;
