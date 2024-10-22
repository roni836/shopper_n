"use client";
import {
    Card,
    Input,
    Button,
    Typography,
    Textarea,
} from "@material-tailwind/react";
import { useState } from "react";

export function CategoryForm({ handleInsertCategory }) {
    const [cat_title, setCat_title] = useState("");
    const [cat_description, setCat_description] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        handleInsertCategory(cat_title, cat_description);
    };

    return (
        <Card
            color="transparent"
            shadow={false}
            className="border border-gray-500 p-6 rounded-lg"
        >
            <Typography variant="h4" color="blue-gray">
                Create new Category
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
                Fill out this form to create a new category
            </Typography>
            <div className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                <form onSubmit={handleSubmit}>
                    <div className="mb-1 flex flex-col gap-6">
                        <Typography variant="h6" color="blue-gray" className="-mb-3">
                            Category Title
                        </Typography>
                        <Input
                            value={cat_title}
                            onChange={(e) => setCat_title(e.target.value)}
                            size="lg"
                            placeholder="e.g books, mobiles"
                            className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                            labelProps={{
                                className: "before:content-none after:content-none",
                            }}
                        />
                        <Typography variant="h6" color="blue-gray" className="-mb-3">
                            Category Description
                        </Typography>
                        <Textarea
                            value={cat_description}
                            onChange={(e) => setCat_description(e.target.value)}
                            placeholder="Write Category Description Here"
                        />
                    </div>
                    <Button className="mt-6" type="submit" fullWidth>
                        Create Category
                    </Button>
                </form>
            </div>
        </Card>
    );
}
