import { useState } from "react";
import { supabase } from "../lib/supabase";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  async function handleLogin(e) {
    e.preventDefault();

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setMessage("Invalid email or password");
      return;
    }

    window.location.href = "/";
  }

  return (
    <main className="page">
      <h1 className="page-title">Login</h1>

      <section className="card">
        <form className="card-content" onSubmit={handleLogin}>
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
            Login
          </button>

          {message && <p>{message}</p>}
        </form>
      </section>
    </main>
  );
}