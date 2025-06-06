import CommonButton from '@/components/common/buttons/CommonButton'
import { ChevronLeft } from 'lucide-react'
import React from 'react'

const SecondDetail = () => {
  return (
    <div className='absolute max-lg:hidden left-4 top-[300px] sm:left-10 md:left-16 lg:left-20 lg:top-[500px] flex flex-col gap-4 items-center max-w-[300px]'>
      <h2 className='text-center text-base sm:text-lg md:text-xl'>
        بیش از ۷۰۰۰ خرید و فروش در سراسر کشور
      </h2>
      <CommonButton
        href='/about'
        title=' درباره ما بیشتر بدانید '
        icon={<ChevronLeft size={20} />}
        className='bg-gold text-gold-foreground'
      />
    </div>
  )
}

export default SecondDetail
