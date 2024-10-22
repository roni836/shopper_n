import React from 'react'
import { ProductCard } from './product-card'
import Product from '@/models/Product'

const ProductSection= async({searchTerm}) => {
  let query = (searchTerm ? {status:true, category: searchTerm} : {status:true})

  let product = await Product.find(query)
  return (
    <div className='grid gap-5 grid-col-2 md:grid-cols-4'>
        {(product.length > 0) ? 
          product.map((product,index)=> (<ProductCard data={product} key={index}/>)):
          <h2>No Product found </h2>
        }

    </div>
  )
}

export default ProductSection