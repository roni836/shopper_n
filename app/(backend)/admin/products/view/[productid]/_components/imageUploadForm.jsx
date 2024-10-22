"use client"

import { Button, Input, Typography } from '@material-tailwind/react'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const ImageUplodForm = ({ label, field, productid }) => {
    const [isEdit, setIsEdit] = useState(false)
    const [photo, setPhoto] = useState(field)

    const router = useRouter();

    const handleUpdate = async () => {

        const formData = new FormData();
        formData.append("image",photo);
        let image = formData.get("image").name
        try {
            //upload image api calling
            await fetch(`http://localhost:3000/api/product/${productid}/upload`,{
                method:"POST",
                body:formData
            })
            await fetch(`http://localhost:3000/api/product/${productid}`, {
                method: `PUT`,
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({image}),
            })

        }catch(error){
            console.log(error)
        }

        setIsEdit(false);
        setPhoto(field);
        router.refresh();
    }

    return (
        <form className="mt-8 mb-2 flex-1 bg-gray-300 p-6 rounded-lg">
            <div className="mb-4">
                <div className="flex justify-between items-center p-2 border-b">
                    <Typography variant="h6" color="blue-gray" className="mb-2 flex-1">
                        {label}
                    </Typography>
                    <Button size="sm" onClick={() => setIsEdit(!isEdit)}>Edit</Button>
                </div>
                {
                    isEdit ? (
                        <div className="flex gap-2">
                            <Input
                                type='file'
                                size="lg"
                                onChange={(e) => setPhoto(e.target.files[0])} // Correct handling of input changes
                                className="rounded-l-lg flex-1 !border-blue-gray-200 bg-white focus:!border-gray-900"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                            />
                            <Button className="rounded-r-lg" size="lg" onClick={handleUpdate}>
                                Go
                            </Button>
                        </div>
                    ) : (field) ? <img src={`/productImages/${field}`} className='w-full'/> : <p className='text-xl italic'>{label} is empty</p>
                }
            </div>
        </form>
    )
}

export default ImageUplodForm;

