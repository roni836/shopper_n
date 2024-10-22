import { CategoryForm } from '../_components/categoryform'
import { redirect } from 'next/navigation';
import DbConnect from '@/utils/dbConnect';
import Category from '@/models/Category';

const page = () => {
  const handleInsertCategory = async (cat_title, cat_description) => {
    "use server";
    DbConnect();

    // Insert the new category into the database
    await Category.create({ cat_title, cat_description });

    redirect("/admin/category");
  };

  return (
    <div className='flex flex-1 justify-center'>
      <CategoryForm handleInsertCategory={handleInsertCategory} />
    </div>
  );
};

export default page;
