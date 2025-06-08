import SubTitle from '@/components/common/texts/subTitle/SubTitle'
import Title from '@/components/common/texts/title/Title'
import { Book } from 'lucide-react'
import React from 'react'

const InfoProducts = () => {
  return (
    <div className='flex flex-col gap-2 items-center'>
      <div className='flex gap-4 items-center'>
        <Title text='محصولات ما' />
        <Book className='text-gold' size={24} />
      </div>
      <SubTitle text='در این بخش می‌توانید جدیدترین و محبوب‌ترین محصولات و برندهای گولدیرو را مشاهده و انتخاب کنید.' />
    </div>
  )
}

export default InfoProducts
