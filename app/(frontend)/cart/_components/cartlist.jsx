"use client";
import {
  Card, CardBody, Typography, Avatar, Button, List,
  ListItem,
  ListItemSuffix,
  Chip,
} from "@material-tailwind/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { CoupounForm } from "./couponForm";

export function CartList({ user }) {
  const [cartData, setCartData] = useState({});
  const [totalAmount, setTotalAmount] = useState(0);
  const [totalDiscountedAmount, setTotalDiscountedAmount] = useState(0);
  const [totalTax, setTax] = useState(0);

  const router = useRouter();

  const calculateTotal = (data) => {
    let orderitems = data.order.items;
    let total = 0;
    let discountTotal = 0;
    for (let item of orderitems) {
      total += item['item']['price'] * item['quantity'];
      discountTotal += item['item']['discount_price'] * item['quantity'];
    }

    setTotalAmount(total);
    setTotalDiscountedAmount(discountTotal);

    let tax = discountTotal * 0.18; // 18% GST on the discounted total
    setTax(tax);
  };

  const loadData = () => {
    fetch("http://localhost:3000/api/order")
      .then((res) => res.json())
      .then((res) => {
        setCartData(res);
        calculateTotal(res);
      })
      .catch((error) => console.error("Error fetching data:", error));
  };

  useEffect(() => {
    loadData();
  }, []); // Add dependency array

  const handlePlus = async (id) => {
    const response = await fetch(`http://localhost:3000/api/order/add-to-cart/${id}`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ user_id: user._id })
    });
    loadData();
  };

  const handleRemove = async (id) => {
    const response = await fetch(`http://localhost:3000/api/order/remove-from-cart/${id}`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ user_id: user._id })
    });
    loadData();
  };

  return (
    <div className='px-[5%] mt-10 flex flex-col lg:flex-row gap-8'>
      <div className='lg:w-8/12 w-full bg-white p-6 rounded-lg shadow-lg'>
        <Card className="w-full">
          <CardBody>
            <div className="divide-y divide-gray-200">
              {cartData.order?.items?.map((orderItem, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between pb-3 pt-3 last:pb-0"
                >
                  <div className="flex items-center gap-x-3">
                    <Avatar
                      size="xxl"
                      variant="rounded"
                      src={`/productImages/${orderItem.item.image}`}
                      alt={orderItem.item.name}
                    />
                    <div>
                      <Typography color="blue-gray" variant="h6">
                        {orderItem.item.name}
                      </Typography>

                      <div className="flex mt-4 items-center">
                        <Button color="red" onClick={() => handleRemove(orderItem.item._id)} className="text-2xl px-3 py-1">-</Button>
                        <Typography variant="large" color="black" className="text-2xl px-3 py-1">
                          {orderItem.quantity}
                        </Typography>
                        <Button color="green" onClick={() => handlePlus(orderItem.item._id)} className="text-2xl px-3 py-1" >+</Button>
                      </div>
                    </div>
                  </div>

                  <Typography color="blue-gray" variant="h6">
                    ₹{orderItem.item.discount_price * orderItem.quantity} <del> {orderItem.item.price * orderItem.quantity}</del>
                  </Typography>
                </div>
              ))}
            </div>
          </CardBody>
        </Card>
      </div>

      <div className='lg:w-4/12 w-full bg-white p-6 rounded-lg shadow-lg'>
        <Card className="w-full">
          <List>
            <ListItem>
              Total Amount
              <ListItemSuffix>
                <Chip
                  value={`₹${totalAmount}`}
                  variant="ghost"
                  size="sm"
                  className="rounded-full"
                />
              </ListItemSuffix>
            </ListItem>
            <ListItem>
              Total Discount Amount
              <ListItemSuffix>
                <Chip
                  value={`₹${totalAmount - totalDiscountedAmount}`}
                  variant="ghost"
                  size="sm"
                  className="rounded-full"
                />
              </ListItemSuffix>
            </ListItem>
            <ListItem>
              Tax (18% GST)
              <ListItemSuffix>
                <Chip
                  value={`₹${totalTax.toFixed(2)}`}
                  variant="ghost"
                  size="sm"
                  className="rounded-full"
                />
              </ListItemSuffix>
            </ListItem>
            <ListItem>
              Total Payable Amount
              <ListItemSuffix>
                <Chip
                  value={`₹${(totalTax + totalDiscountedAmount).toFixed(2)}`}
                  variant="filled"
                  size="sm"
                  className="rounded-full bg-black text-white"
                />
              </ListItemSuffix>
            </ListItem>
          </List>
        </Card>
        <CoupounForm />
      </div>
    </div>
  );
}
