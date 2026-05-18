"use client";

import { createClient } from "@/lib/supabase/client";
import { useState } from "react";

export default function SignupPage() {
  const supabase = createClient();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    try {
      const { error, data } = await supabase.auth.signUp({ email, password });
      if (error) {
        throw new Error("Error in creating new user", error);
      }
      console.log("signup data =>", data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <h2>SignupPage</h2>

      <label htmlFor="email">Email</label>
      <input
        type="email"
        name="email"
        id="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />

      <label htmlFor="password">Password</label>
      <input
        type="password"
        name="password"
        id="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />

      <button>Sign up</button>
    </div>
  );
}
