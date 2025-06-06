import { getCategories } from '@/utils/services/api/landing/categories/getCategories'
import React from 'react'
import Category from './Category';
import Title from '@/components/common/texts/title/Title';
import SubTitle from '@/components/common/texts/subTitle/SubTitle';

const Categories = async () => {

  const categories = await getCategories();

  return (
    <div className='gap-4 flex-col mx-auto w-fit text-center'>
      <Title text=' دسته بندی ها ' />
      <SubTitle text=' تمام دسته بندی های محصولات رو می توانید انتخاب کنید. ' />
      <div className='w-full flex gap-8 flex-wrap justify-center'>
        {categories.map(({ title, icon: Icon }, idx) =>
          Icon ? (
            <Category key={idx} title={title} icon={<Icon size={30} />} />
          ) : null
        )}
      </div>
    </div>
  )
}

export default Categories
