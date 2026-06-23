import { supabase } from "../../lib/supabase";

export default function Navbar() {
  async function handleLogout() {
    await supabase.auth.signOut();
    window.location.href = "/login";
  }

  return (
    <header className="navbar">
      <span className="menu-icon">☰</span>

      <h2>COOKLOOP</h2>

      <button
        onClick={handleLogout}
        style={{
          background: "none",
          border: "none",
          cursor: "pointer",
          fontSize: "16px",
        }}
      >
        Logout
      </button>
    </header>
  );
}