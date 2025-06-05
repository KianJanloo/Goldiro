import CommonButton from '@/components/common/buttons/CommonButton'
import { ChevronLeft } from 'lucide-react'
import React from 'react'

const SecondDetail = () => {
  return (
    <div className='flex flex-col gap-4 absolute items-center left-20 top-[500px]'>
      <h2 className='text-xl w-[290px] text-center' > بیش از ۷۰۰۰
        خرید و فروش در سراسر کشور </h2>
      <CommonButton href='/about' title=' درباره ما بیشتر بدانید ' icon={<ChevronLeft size={20} />} className='bg-gold text-gold-foreground' />
    </div>
  )
}

export default SecondDetail
