import Category from '@/models/Category'
import React from 'react'
import { CategoryTable } from './_components/categorytable'
import Link from 'next/link'

const page =async () => {
  const categories = await Category.find({})

  return (
    <div>
      <div className='flex flex-1 justify-between items-center mb-4'>
        <h3 className='text-xl font-semibold mb-4'>Manage Category</h3>

        <Link href="/admin/category/create">
          <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
            Add New Category
          </button>
        </Link>
      </div>
      <CategoryTable data={categories}/>
    </div>
  )
}

export default page