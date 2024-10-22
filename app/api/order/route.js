import { auth } from "@/auth";
import Order from "@/models/Order";
import User from "@/models/User";
import DbConnect from "@/utils/dbConnect";
import { NextResponse } from "next/server";

export async function GET(req, res) {
    try {
         DbConnect(); // Await the database connection

        let session = await auth();

        if (session) {
            let user = await User.findOne({ email: session.user.email });

            let order = await Order.findOne({ user: user._id, isOrder: false }).populate("items.item"); 

            return NextResponse.json({ order }, { status: 200 });
        } else {
            return NextResponse.json({ message: "Not authenticated" }, { status: 401 });
        }
    } catch (error) {
        return NextResponse.json({ message: "Error retrieving order", error: error.message }, { status: 500 });
    }
}
