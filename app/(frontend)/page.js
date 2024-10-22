import React from 'react'
import { Banner } from './components/banner'
import { CategoriesList } from './components/category-list'
import ProductSection from './components/product-section'
import DbConnect from '@/utils/dbConnect'
import Category from '@/models/Category'

const page =async () => {
  DbConnect()

  let categories = await Category.find({})
  return (
    <div>
      <Banner />
      <div className='flex gap-5 flex-1 md:flex-row flex-col px-10 mt-5'>
        <div className='w-3/12'>
          <CategoriesList data={categories} />
        </div>
        <div className='w-9/12'>
          <ProductSection/>
        </div>
      </div>
    </div>
  )
}

export default page