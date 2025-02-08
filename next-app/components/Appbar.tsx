"use client"; // ✅ Required for Client Components

import { signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";

export default function Appbar() {
  const router = useRouter(); // ✅ Correct import

  return (
   <>

    <button
      onClick={() => {
      signIn()
      }}
    >
      Signup
    </button>
       
       <button
       onClick={() => {
signOut()
       }}
     >
       logout
     </button>
     </>
  );
}