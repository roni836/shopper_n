"use client";
import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { SignOut } from "./signout-button";
import { signOut } from "next-auth/react"; // Ensure correct import

export function AdminNavbar() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => window.innerWidth >= 960 && setOpenNav(false);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex-1">
      <Navbar className="sticky top-0 z-10 h-max max-w-full bg-black text-white rounded-none px-4 py-2 lg:px-8 lg:py-4">
        <div className="flex items-center justify-between">
          <Typography
            as="a"
            href="#"
            className="mr-4 cursor-pointer py-1.5 font-medium text-gray-200"
          >
            Shopper | Admin Panel
          </Typography>
          <Button
            variant="gradient"
            size="md"
            color="red"
            className="hidden lg:inline-block"
            onClick={() => signOut()} // Fix the button onClick here
          >
            <span>Logout</span>
          </Button>
          <IconButton
            variant="text"
            className="lg:hidden text-white"
            onClick={() => setOpenNav(!openNav)}
            aria-label="Toggle navigation"
          >
            {openNav ? (
              <XMarkIcon className="h-6 w-6" strokeWidth={2} />
            ) : (
              <Bars3Icon className="h-6 w-6" strokeWidth={2} />
            )}
          </IconButton>
        </div>
        <Collapse open={openNav}>
          <Button
            fullWidth
            variant="gradient"
            size="sm"
            color="red"
            className="mb-2"
            onClick={() => signOut()} // Fix the button onClick here as well
          >
            <span>Logout</span>
          </Button>
          {/* Add more menu items here if needed */}
        </Collapse>
      </Navbar>
    </div>
  );
}
