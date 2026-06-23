import { useState } from "react";
import { supabase } from "../lib/supabase";

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  async function handleSignup(e) {
    e.preventDefault();

    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      setMessage(error.message);
      return;
    }

    setMessage("Account created! You can now log in.");
  }

  return (
    <main className="page">
      <h1 className="page-title">Sign Up</h1>

      <section className="card">
        <form className="card-content" onSubmit={handleSignup}>
          <label>Email</label>
          <input
            className="form-input"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label>Password</label>
          <input
            className="form-input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button className="button" type="submit">
            Create Account
          </button>

          {message && <p>{message}</p>}
        </form>
      </section>
    </main>
  );
}