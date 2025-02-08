"use client";
import { signIn, signOut } from "next-auth/react";

export default function AuthButtons() {
  return (
    <div>
      <h2>Sign In Options</h2>
      <br />
      
      <form>
        <div>
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" required />
        </div>
        <div>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" required />
        </div>
        <button type="submit">Sign Up</button>
    </form>
    <br />

      <button onClick={() => signIn("google")}>
        Sign in with Google
      </button>
      <br />
      
      <button onClick={() => signIn("github")}>
        Sign in with GitHub
      </button>
      <br />
      <button onClick={() => signOut()}>
        Logout
      </button>
    </div>
  );
}