"use client";
import React from "react";
import Link from "next/link";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";
import {
  ChevronRightIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";

export function Sidebar() {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <Card className="h-[calc(100vh-2rem)] bg-black text-white rounded-none w-full p-4 shadow-lg shadow-blue-gray-900/5">
      <List>
        <Link href="/dashboard" passHref>
          <ListItem className="hover:bg-gray-800 cursor-pointer">
            <ListItemPrefix>
              <InboxIcon className="h-5 w-5 text-gray-400" />
            </ListItemPrefix>
            <Typography className="text-gray-300">Dashboard</Typography>
          </ListItem>
        </Link>

        <Accordion
          open={open === 1}
          icon={
            <ChevronDownIcon
              strokeWidth={2.5}
              className={`mx-auto h-4 w-4 transition-transform ${open === 1 ? "rotate-180" : ""}`}
            />
          }
        >
          <ListItem className={`p-0 ${open === 1 ? "bg-gray-800" : ""}`} selected={open === 1}>
            <AccordionHeader onClick={() => handleOpen(1)} className="border-b-0 p-3">
              <ListItemPrefix>
                <PresentationChartBarIcon className="h-5 w-5 text-gray-400" />
              </ListItemPrefix>
              <Typography className="mr-auto font-normal text-gray-300">
                Categories
              </Typography>
            </AccordionHeader>
          </ListItem>
          <AccordionBody className="py-1">
            <List className="p-0">
              <Link href="/admin/category/create" passHref>
                <ListItem className="pl-8 hover:bg-gray-700 cursor-pointer">
                  <ListItemPrefix>
                    <ChevronRightIcon strokeWidth={3} className="h-3 w-5 text-gray-400" />
                  </ListItemPrefix>
                  <Typography className="text-gray-300">Insert Category</Typography>
                </ListItem>
              </Link>
              <Link href="/admin/category" passHref>
                <ListItem className="pl-8 hover:bg-gray-700 cursor-pointer">
                  <ListItemPrefix>
                    <ChevronRightIcon strokeWidth={3} className="h-3 w-5 text-gray-400" />
                  </ListItemPrefix>
                  <Typography className="text-gray-300">Manage Category</Typography>
                </ListItem>
              </Link>
            </List>
          </AccordionBody>
        </Accordion>

        <Accordion
          open={open === 2}
          icon={
            <ChevronDownIcon
              strokeWidth={2.5}
              className={`mx-auto h-4 w-4 transition-transform ${open === 2 ? "rotate-180" : ""}`}
            />
          }
        >
          <ListItem className={`p-0 ${open === 2 ? "bg-gray-800" : ""}`} selected={open === 2}>
            <AccordionHeader onClick={() => handleOpen(2)} className="border-b-0 p-3">
              <ListItemPrefix>
                <ShoppingBagIcon className="h-5 w-5 text-gray-400" />
              </ListItemPrefix>
              <Typography className="mr-auto font-normal text-gray-300">
                Products
              </Typography>
            </AccordionHeader>
          </ListItem>
          <AccordionBody className="py-1">
            <List className="p-0">
              <Link href="/admin/products/create" passHref>
                <ListItem className="pl-8 hover:bg-gray-700 cursor-pointer">
                  <ListItemPrefix>
                    <ChevronRightIcon strokeWidth={3} className="h-3 w-5 text-gray-400" />
                  </ListItemPrefix>
                  <Typography className="text-gray-300">Insert Products</Typography>
                </ListItem>
              </Link>
              <Link href="/admin/products" passHref>
                <ListItem className="pl-8 hover:bg-gray-700 cursor-pointer">
                  <ListItemPrefix>
                    <ChevronRightIcon strokeWidth={3} className="h-3 w-5 text-gray-400" />
                  </ListItemPrefix>
                  <Typography className="text-gray-300">Manage Products</Typography>
                </ListItem>
              </Link>
            </List>
          </AccordionBody>
        </Accordion>

        <hr className="my-2 border-gray-700" />

        <Link href="/orders" passHref>
          <ListItem className="hover:bg-gray-800 cursor-pointer">
            <ListItemPrefix>
              <InboxIcon className="h-5 w-5 text-gray-400" />
            </ListItemPrefix>
            <Typography className="text-gray-300">Order</Typography>
            <ListItemSuffix>
              <Chip value="14" size="sm" variant="ghost" color="gray" className="rounded-full text-gray-300" />
            </ListItemSuffix>
          </ListItem>
        </Link>

        <Link href="/coupons/manage" passHref>
          <ListItem className="hover:bg-gray-800 cursor-pointer">
            <ListItemPrefix>
              <UserCircleIcon className="h-5 w-5 text-gray-400" />
            </ListItemPrefix>
            <Typography className="text-gray-300">Manage Coupons</Typography>
          </ListItem>
        </Link>

        <Link href="/customers/manage" passHref>
          <ListItem className="hover:bg-gray-800 cursor-pointer">
            <ListItemPrefix>
              <UserCircleIcon className="h-5 w-5 text-gray-400" />
            </ListItemPrefix>
            <Typography className="text-gray-300">Manage Customers</Typography>
          </ListItem>
        </Link>

        <Link href="/settings" passHref>
          <ListItem className="hover:bg-gray-800 cursor-pointer">
            <ListItemPrefix>
              <Cog6ToothIcon className="h-5 w-5 text-gray-400" />
            </ListItemPrefix>
            <Typography className="text-gray-300">Settings</Typography>
          </ListItem>
        </Link>

        <Link href="/logout" passHref>
          <ListItem className="hover:bg-gray-800 cursor-pointer">
            <ListItemPrefix>
              <PowerIcon className="h-5 w-5 text-gray-400" />
            </ListItemPrefix>
            <Typography className="text-gray-300">Log Out</Typography>
          </ListItem>
        </Link>
      </List>
    </Card>
  );
}
