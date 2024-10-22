import React from 'react'
import StaticCard from './_components/static-card'
import { auth } from '@/auth'
import { redirect } from 'next/navigation'

const page =async () => {
  const session =await auth()

  if(!session?.user){
    redirect('/login')
  }
  return (
    <div className='grid grid-cols-4 gap-5'>
      <StaticCard bg="indigo" title="Total products" no={0}/>
      <StaticCard bg="pink" title="Total Orders" no={0}/>
      <StaticCard bg="yellow" title="Total Category" no={0}/>
      <StaticCard bg="light-green" title="Total Delivered" no={0}/>
    </div>
  )
}

export default page