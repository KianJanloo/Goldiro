import { getCategories } from '@/utils/services/api/categories/categories'
import React from 'react'
import Category from './Category';

const Categories = async () => {

  const categories = await getCategories();

  return (
    <div className='gap-4 flex-col mx-auto w-fit text-center'>
      <h2 className='text-2xl'> دسته بندی ها </h2>
      <span className='text-foreground/60'> تمام دسته بندی های محصولات رو می توانید انتخاب کنید. </span>
      {categories.map(({ title, icon: Icon }, idx) =>
        Icon ? (
          <Category key={idx} title={title} icon={<Icon size={30} />} />
        ) : null
      )}
    </div>
  )
}

export default Categories
