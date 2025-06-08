import { Github } from 'lucide-react'
import React from 'react'
import Google from '@/assets/Google.png'
import Image from 'next/image'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'

const LoginWithOtherWay = () => {
    return (
        <div className='flex gap-4'>
            <Tooltip>
                <TooltipTrigger>
                    <div className='bg-secondary py-2 rounded-full cursor-pointer px-4'>
                        <Image alt=' ' src={Google || " "} width={20} height={20} />
                    </div>
                </TooltipTrigger>
                <TooltipContent>
                    ورود با حساب گوگل
                </TooltipContent>
            </Tooltip>
            <Tooltip>
                <TooltipTrigger>
                    <div className='bg-secondary py-2 rounded-full cursor-pointer px-4'>
                        <Github size={20} />
                    </div>
                </TooltipTrigger>
                <TooltipContent>
                    ورود با حساب گیت هاب
                </TooltipContent>
            </Tooltip>
        </div>
    )
}

export default LoginWithOtherWay
