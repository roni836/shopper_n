import { NextResponse } from "next/server";
import { writeFile } from "fs/promises";

export async function POST(request) {
    const formData = await request.formData();

    const file = formData.get("image");

    if (!file) {
        return NextResponse.json({ success: false, message: "No file provided" });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    try {
        await writeFile(`./public/productImages/${file.name}`, buffer);
        return NextResponse.json({ success: true, message: "File uploaded successfully" });
    } catch (error) {
        return NextResponse.json({ success: false, message: "Error uploading file: " + error.message });
    }
}
