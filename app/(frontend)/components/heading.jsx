import React from 'react'

const Heading = ({color,title,subtitle}) => {
  return (
    <div className={`flex flex-col gap-2 flex-1 ${color} text-white py-10 px-[5%]`}>
        <h1 className='text-2xl capitalize font-semibold'>{title}</h1>
        <p className='text-xs font-light'>{subtitle}</p>
    </div>
  )
}

export default Heading