"use client";
import axios from "axios";
import { useState } from "react";

export default function Signup() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handler= async ()=>{
   const res= await axios.post("http://localhost:3000/api/user",
    {
        username,password
    }
   )

  }

  return (
    <div className="h-screen flex justify-center flex-col">
      <div className="flex justify-center w-screen">
        <a
          href="#"
          className="block w-screen max-w-screen-xl p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100"
        >
          <div className="px-10">
            <div className="text-3xl font-extrabold">Sign in</div>

            <div className="pt-4">
              <label className="block mb-2 text-sm text-black font-semibold">
                Username
              </label>
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>

            <div className="pt-4">
              <label className="block mb-2 text-sm text-black font-semibold">
                Password
              </label>
              <input
                type="password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button
              type="button"
              onClick={handler}
              className="mt-8 w-full text-white bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5"
            >
              Sign in
            </button>
          </div>
        </a>
      </div>
    </div>
  );
}