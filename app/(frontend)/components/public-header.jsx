"use client";
import React from "react";
import {
    Navbar,
    Collapse,
    Typography,
    IconButton,
    Badge,
    Button,
} from "@material-tailwind/react";
import { Bars3Icon, ShoppingCartIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useSession, signOut } from "next-auth/react"; // Import useSession and signOut
import Link from "next/link";
import { useRouter } from "next/navigation";

function NavList({ onLogout }) {
    const router = useRouter();
    return (
        <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            {onLogout ? (
                <>
                    <Typography as="li" variant="small" color="blue-gray" className="p-1 font-medium">
                        <a href="/" className="flex items-center hover:text-blue-500 transition-colors">
                            Home
                        </a>
                    </Typography>
                    <Typography as="li" variant="small" color="blue-gray" className="p-1 font-medium">
                        <a href="#" className="flex items-center hover:text-blue-500 transition-colors">
                            About
                        </a>
                    </Typography>

                    <Typography as="li" variant="small" color="blue-gray" className="p-1 font-medium">
                        <a onClick={onLogout} className="flex items-center hover:text-blue-500 transition-colors ">
                            Logout
                        </a>
                    </Typography>
                    <Badge content={5} >
                        <Button className="flex items-center gap-2" onClick={() => router.push("/cart")}>
                            <ShoppingCartIcon className="fill-white size-5" />
                            CART
                        </Button>
                    </Badge>
                </>
            ) : (
                <>
                    <Link href="/login">
                        <Button className="flex items-center gap-2">
                            Register
                        </Button>
                    </Link>
                    <Link href="/login">
                        <Button className="flex items-center gap-2">
                            Login
                        </Button>
                    </Link>
                </>
            )}
        </ul>
    );
}

export function PublicHeader() {
    const { data: session } = useSession(); // Get session data from useSession
    // console.log(session?.user); {.........}
    const [openNav, setOpenNav] = React.useState(false);

    const handleWindowResize = () => {
        window.innerWidth >= 960 && setOpenNav(false);
    };

    React.useEffect(() => {
        window.addEventListener("resize", handleWindowResize);
        return () => {
            window.removeEventListener("resize", handleWindowResize);
        };
    }, []);

    const handleLogout = async () => {
        await signOut(); // Call signOut to log the user out
    };

    return (
        <Navbar fullWidth="true" className="mx-auto w-full px-6 py-3">
            <div className="flex items-center justify-between text-blue-gray-900">
                <Typography
                    as="a"
                    href="/"
                    variant="h6"
                    className="mr-4 cursor-pointer py-1.5"
                >
                    Shopper
                </Typography>
                <div className="hidden lg:block">
                    <NavList onLogout={session ? handleLogout : null} /> {/* Pass logout function if session exists */}
                </div>
                <IconButton
                    variant="text"
                    className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                    ripple={false}
                    onClick={() => setOpenNav(!openNav)}
                >
                    {openNav ? (
                        <XMarkIcon className="h-6 w-6" strokeWidth={2} />
                    ) : (
                        <Bars3Icon className="h-6 w-6" strokeWidth={2} />
                    )}
                </IconButton>
            </div>
            <Collapse open={openNav}>
                <NavList onLogout={session ? handleLogout : null} /> {/* Pass logout function if session exists */}
            </Collapse>
        </Navbar>
    );
}

