"use client"

import { Card } from "@material-tailwind/react"

export default function StaticCard({title,no,bg}){
    return (
        <Card color={bg} variant="gradient">
            <Card.Body>
                <h5 className="text-3xl font-bold">{no}+</h5>
                <p className="text-2xl">{title}</p>
            </Card.Body>
        </Card>
    )
}