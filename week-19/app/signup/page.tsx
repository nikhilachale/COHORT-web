
"use client";

import axios from "axios";
import { useState } from "react";
import { JSX } from "react";

export default function Signin(): JSX.Element {
    const [username, setUsername] = useState<string>("");
    const [password, setPass] = useState<string>("");

    const handleSignin = async () => {
        try {
            await axios.post("http://localhost:3000/api/v1/signup", {
                username,
                password,
            });
        } catch (error) {
            console.error("Error during sign-in:", error);
        }
    };

    return (
        <div className="w-screen h-screen flex justify-center items-center">
            <div className="border p-2">
                <input
                    type="text"
                    placeholder="username"
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="password"
                    onChange={(e) => setPass(e.target.value)}
                />

                <button onClick={handleSignin}>Sign Up</button>
            </div>
        </div>
    );
}