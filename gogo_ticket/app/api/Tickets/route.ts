import Ticket from "@/app/(models)/Ticket";
import { NextResponse } from "next/server";

export async function POST(req : Request) {
try{
    const body = await req.json();
    const ticketData=body.formData;

    await Ticket.create(ticketData);
    return NextResponse.json({message:"Ticket created successfully",Ticket},{status:201});

}
catch(error){
    return NextResponse.json({message:"ERROR",error},{status:500});
}

}
export async function GET() {
    