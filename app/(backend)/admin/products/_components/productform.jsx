"use client";
import {
    Card,
    Input,
    Button,
    Typography,
} from "@material-tailwind/react";
import { useState } from "react";

export function ProductForm({ handleInsertProduct }) {
    const [name, setName] = useState("");  // Added setName to update the state

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name.trim()) {
            handleInsertProduct(name);  // Only call the handler if the name is not empty
        }
    };

    return (
        <Card
            color="transparent"
            shadow={false}
            className="border border-gray-500 p-6 rounded-lg"
        >
            <Typography variant="h4" color="blue-gray">
                Create new Product
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
                Fill out the name of the product
            </Typography>
            <div className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                <form onSubmit={handleSubmit}>
                    <div className="mb-1 flex flex-col gap-6">
                        <Typography variant="h6" color="blue-gray" className="-mb-3">
                            Product Name
                        </Typography>
                        <Input
                            value={name}
                            onChange={(e) => setName(e.target.value)}  // Correctly updating the state
                            size="lg"
                            placeholder="e.g books, mobiles"
                            className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                            labelProps={{
                                className: "before:content-none after:content-none",
                            }}
                        />
                    </div>
                    <Button className="mt-6" type="submit" fullWidth>
                        Create Product
                    </Button>
                </form>
            </div>
        </Card>
    );
}
