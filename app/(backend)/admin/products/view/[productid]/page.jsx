import Product from '@/models/Product';
import DbConnect from '@/utils/dbConnect';
import React from 'react';
import TitleForm from './_components/TitleForm';
import DescriptionForm from './_components/DescriptionForm';
import PriceForm from './_components/priceForm';
import DiscountPrice from './_components/DiscountPrice';
import CategoryForm from './_components/CategoryForm';
import Category from '@/models/Category';
import StockForm from './_components/StockForm';
import BarCodeForm from './_components/BarCodeForm';
import BrandForm from './_components/BrandForm';
import PublishButton from './_components/publish-button';
import ImageUplodForm from './_components/imageUploadForm';

const Page = async ({ params }) => {
  const { productid } = params;

  DbConnect(); // Await DbConnect to ensure connection is established

  const product = await Product.findById(productid).populate('category'); // Use exec() to get a promise
  const category = await Category.find({})

  const total_fields =["name","description","price","discount_price","stock","brand","barcode","category","image"]
  const filledFields = total_fields.filter((field)=>product[field]).length
  const remainingFields = total_fields.filter((field)=>!product[field])
  return (
    <div>
      <div className='flex flex-1 flex-col'>
        <div className='flex flex-1 justify-between'>
        <h2 className='text-xl font-semibold'>Edit Products</h2>
        <PublishButton productid={productid} className={remainingFields.length ? "cursor-not-allowed": "cursor-pointer"}isDisabled={remainingFields.length} />
        </div>
        <div className='flex flex-1 gap-2'>
          <p>Total fields: {total_fields.length}</p>
          <p>Filled fields: {filledFields}</p>
        </div>
      </div>
      <div className='grid grid-cols-3 gap-5'>
        <div className='flex flex-col flex-1 '>
          <TitleForm
            label="Product Title"
            field={product.name}
            productid={productid} // Fix prop name
          />
          <DescriptionForm
            label="Product Description"
            field={product.description}
            productid={productid} // Fix prop name
          />
          <PriceForm
            label="Product Price"
            field={product.price}
            productid={productid} // Fix prop name
          />
          <DiscountPrice
            label="Discount Price"
            field={product.discount_price}
            productid={productid} // Fix prop name
          />
          <CategoryForm
            data={category}
            label="Product Category"
            field={product.category ?.cat_title}
            cat_id={product.category?._id}
            productid={productid} // Fix prop name
          />


        </div>
        <div className='flex flex-col flex-1 gap-4'>
          <StockForm
            label="Product Stock"
            field={product.stock}
            productid={productid} // Fix prop name
          />
          <BarCodeForm
            label="Product Barcode"
            field={product.barcode}
            productid={productid} // Fix prop name
          />
          <BrandForm
            label="Product Brand"
            field={product.brand}
            productid={productid} // Fix prop name
          />
          <ImageUplodForm
            label="Product Image"
            field={product.image}
            productid={productid} // Fix prop name
          />
        </div>

      </div>
    </div>
  );
};

export default Page;
