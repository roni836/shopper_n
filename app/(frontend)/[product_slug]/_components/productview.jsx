"use client"
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import { useRouter } from "next/navigation";

export function ProductView({ data, user }) {

  const router = useRouter()

  
  const handleAddToCart = async () => {
    let orderData = fetch(`http://localhost:3000/api/order/add-to-cart/${data._id}`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ user_id: user._id })
    });
    router.push("/cart")
  }


  return (
    <Card className="w-full flex flex-row">
      <CardHeader
        shadow={false}
        floated={false}
        className="m-0 w-2/5 shrink-0 rounded-r-none"
      >
        <img
          src={`/productImages/${data.image}`}
          alt="card-image"
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody>

        <Typography variant="h4" color="blue-gray" className="mb-2">
          {data.name}
        </Typography>
        <Typography variant="h6" color="gray" className="mb-4 uppercase">
          {data.category}
        </Typography>
        <Typography color="gray" className="mb-8 font-normal">
          Like so many organizations these days, Autodesk is a company in
          transition. It was until recently a traditional boxed software company
          selling licenses. Yet its own business model disruption is only part
          of the story
        </Typography>
        <div className="flex flex-1 gap-3">
          <Button onClick={handleAddToCart} variant="text" className="flex text-xl font-normal bg-orange-600 text-white hover:bg-orange-800 items-center gap-2">
            Add To Cart

          </Button>
          <a href="#" className="inline-block ml-2">
            <Button variant="text" className="flex font-normal bg-teal-600 text-white hover:bg-teal text-xl font-normal-800 items-center gap-2">
              Buy Now

            </Button>
          </a>
        </div>
      </CardBody>
    </Card>
  );
}