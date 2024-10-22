import Product from "@/models/Product";
import DbConnect from "@/utils/dbConnect";
import { NextResponse } from "next/server";

export async function PUT(request, {params}){

    const productid = params.productid;

    DbConnect();

    const publishedProduct = await Product.findByIdAndUpdate(productid, {status:true})

    return NextResponse.json({"msg":"product Published successfully"});

}