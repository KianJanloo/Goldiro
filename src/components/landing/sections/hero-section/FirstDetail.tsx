import CommonButton from '@/components/common/buttons/CommonButton'
import React from 'react'
import { ChevronLeft } from 'lucide-react'
import { TypingAnimation } from '@/components/ui/typing-animation'

const FirstDetail = () => {
  return (
    <div className='absolute max-lg:hidden right-4 top-40 sm:right-10 md:right-16 lg:right-20 lg:top-60 flex flex-col gap-4 max-w-[300px]'>
      <TypingAnimation className='text-gold text-lg sm:text-xl md:text-2xl'>
        طلا، بازتابی از شکوه شما
      </TypingAnimation>
      <CommonButton
        title=' مشاهده محصولات '
        href='/products'
        icon={<ChevronLeft size={20} />}
        className='bg-foreground text-gold-foreground'
      />
    </div>
  )
}

export default FirstDetail
