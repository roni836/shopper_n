import React from 'react'
import { ProductForm } from '../_components/productform'
import DbConnect from '@/utils/dbConnect';
import Product from '@/models/Product';
import slugify from 'slugify';
import { redirect } from 'next/navigation';

const page = () => {

    const handleInsertProduct = async (name) => {
        "use server";
        DbConnect();
    
        // Insert the new category into the database
        await Product.create({ name, slug:slugify(name,{
          replacement: '-',  
          remove: /[*+~.()'"!:@]/g, 
          lower: true,      
          strict: false,     
          trim: true       
        }) });
    
        redirect("/admin/products/create+");
      };
  return (
    <div className='flex flex-1 justify-center'>
        <ProductForm handleInsertProduct={handleInsertProduct} />
    </div>
  )
}

export default page