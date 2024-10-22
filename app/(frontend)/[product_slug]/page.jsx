import React from 'react'
import { ProductView } from './_components/productview'
import Product from '@/models/Product'
import DbConnect from '@/utils/dbConnect';
import ProductSection from '../components/product-section';
import { auth } from '@/auth';
import User from '@/models/User';

const page = async ({ params }) => {
  const { product_slug } = params;

  const session = await auth();

   DbConnect(); //database connection

  const singleProduct = await Product.findOne({ slug: product_slug });
  const relatedProduct = await Product.find({});

  // Get User logic
  let user = null;
  if (session) {
    user = await User.findOne({ email: session.user.email }); // Use the already declared 'user'
  }

  return (
    <div className='px-[5%]'>
      <div className='flex flex-1 mt-5'>
        <ProductView data={singleProduct} user={user} />
      </div>
      <div className='flex flex-1 flex-col mt-10'>
        <h2 className='text-2xl'>Related Products</h2>
        <ProductSection data={relatedProduct} />
      </div>
    </div>
  )
}

export default page;
