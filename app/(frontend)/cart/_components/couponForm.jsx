"use client"

import { Button, Input } from "@material-tailwind/react"

export const CoupounForm = () => {
  return (
    <form className="flex flex-col sm:flex-row gap-4 p-4 border border-gray-300 rounded-lg shadow-sm w-full mt-6 bg-white">
      <Input 
        type="text" 
        placeholder="Enter Coupon Code" 
        className="flex-1 px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
      />
      <Button 
        type="submit" 
        className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors"
      >
        Apply
      </Button>
    </form>
  )
}
