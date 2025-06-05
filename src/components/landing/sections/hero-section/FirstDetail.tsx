import CommonButton from '@/components/common/buttons/CommonButton'
import React from 'react'
import { ChevronLeft } from 'lucide-react'
import { TypingAnimation } from '@/components/ui/typing-animation'

const FirstDetail = () => {
  return (
    <div className='flex flex-col gap-4 absolute right-20 top-60'>
      <TypingAnimation className='text-gold text-2xl' > طلا، بازتابی از شکوه شما </TypingAnimation>
      <CommonButton title=' مشاهده محصولات ' href='/products' icon={<ChevronLeft size={20} />} className='bg-foreground text-gold-foreground' />
    </div>
  )
}

export default FirstDetail
