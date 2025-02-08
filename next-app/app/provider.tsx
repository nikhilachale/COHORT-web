"use client";
import { SessionProvider } from "next-auth/react";

 // ✅ Required for Client Components

export function Providers({children}:{children:any})
{
    return (
        <SessionProvider>
            {children}
        </SessionProvider>
    )
}