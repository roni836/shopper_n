import React from 'react';
import Heading from '../components/heading';
import { CartList } from './_components/cartlist';
import { CoupounForm } from './_components/couponForm';
import { auth } from '@/auth';
import User from '@/models/User';

const Page = async () => {

  // Get User logic
  let user = null;
  const session = await auth();

  if (session) {
    user = await User.findOne({ email: session.user.email }); // Use the already declared 'user'
  }


  return (
    <>
      <Heading color="bg-black" title="My Cart" subtitle="Manage Your Cart by adding some products" />
      <CartList user={user} />

    </>
  );
}

export default Page;
