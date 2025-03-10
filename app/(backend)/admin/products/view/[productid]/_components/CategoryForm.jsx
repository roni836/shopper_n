"use client"

import { Button, Input, Option, Select, Typography } from '@material-tailwind/react'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const CategoryForm = ({ label, field, productid, data, cat_id }) => {
    const [isEdit, setIsEdit] = useState(false)
    const [category, setCategory] = useState(field)

    const router = useRouter();

    const handleUpdate = async () => {
        try {
            await fetch(`http://localhost:3000/api/product/${productid}`, {
                method: `PUT`,
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ category }),
            })

        } catch (error) {
            console.log(error)
        }

        setIsEdit(false);
        setCategory(field);
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
                            <Select
                                value={cat_id}
                                label={label}
                                onChange={(val) => setCategory(val)} // Correct handling of input changes
                                className="rounded-l-lg flex-1 !border-blue-gray-200 bg-white focus:!border-gray-900"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                            >
                                {
                                    data.map((category, i) => (
                                        <Option value={category._id}>{category.cat_title}</Option>
                                    ))
                                }
                            </Select>
                            <Button className="rounded-r-lg" size="lg" onClick={handleUpdate}>
                                Go
                            </Button>
                        </div>
                    ) : (field) ? <p className='text-xl'>{field}</p> : <p className='text-xl italic'>{label} is empty</p>
                }
            </div>
        </form>
    )
}

export default CategoryForm;

