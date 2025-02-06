import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';

// Use a global Prisma instance to prevent multiple connections
const prisma = new PrismaClient();

export function GET() {
    return NextResponse.json({
        email: "nikhi@gmail.com",
        name: "nikhil achale"
    });
}

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();

        // Ensure username and password exist in request body
        if (!body.username || !body.password) {
            return NextResponse.json({ error: "Username and password are required" }, { status: 400 });
        }

        // Create user in the database
        const user = await prisma.user.create({
            data: {
                username: body.username,
                password: body.password, // Ideally, hash passwords before saving!
            }
        });

        console.log("User created:", user);

        return NextResponse.json({ message: "User created successfully", user });

    } catch (error) {
        console.error("Error creating user:", error);

        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}

export function PUT() {
    return NextResponse.json({
        email: "nikhi@gmail.com",
        name: "nikhil achale"
    });
}