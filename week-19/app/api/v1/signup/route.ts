import { NextRequest,NextResponse } from "next/server";

// import { PrismaClient } from "@prisma/client";
import  prisma  from "../../../../app/lib/db";

export async function POST(req:NextRequest) {

    const data=await req.json();

    const user= await prisma.user.create({
        data:{
            username:data.username,
            password:data.password
        }
    })

    return NextResponse.json({
        message:"you have signed up successful"
    })


    
}