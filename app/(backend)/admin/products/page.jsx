import React from 'react'
import Product from '@/models/Product'
import { ProductCalling } from './_components/productCalling'
import Link from 'next/link'

const page = async () => {
    const products = await Product.find({})
    return (
        <div>
            <div className='flex flex-1 justify-between items-center mb-4'>
                <h3 className='text-xl font-semibold mb-4'>Manage Products</h3>

                <Link href="/admin/products/create">
                    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
                        Add New Products
                    </button>
                </Link>
            </div>
            <ProductCalling data={products} />
        </div>
    )
}

export default page