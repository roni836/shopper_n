
import Category from "@/models/Category";
import Heading from "../../components/heading"
import { CategoriesList } from "../../components/category-list";
import ProductSection from "../../components/product-section";

const page = async ({params}) => {
  const {category_slug} = params;
  let CategoryDetails = await Category.findById(category_slug)
  let categories = await Category.find({});

  return (
    <div>
      <Heading color="bg-orange-700" title={`your search term "${CategoryDetails.cat_title}"`} subtitle="total 0 Product found"/>
      <div className="flex flex-1 md:flex-row flex-col px-10 mt-5">
        <div className='w-3/12'>
          <CategoriesList data= {categories}/>
        </div>
        <div className='9/12'>
          <ProductSection searchTerm = {category_slug}/>
        </div>
      </div>   
    </div>
  )
}

export default page