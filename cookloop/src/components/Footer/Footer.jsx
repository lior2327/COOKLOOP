import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <nav className="bottom-nav">
      <Link to="/">⌂<br />Home</Link>
      <Link to="/search">⌕<br />Explore</Link>
      <Link to="/create">＋<br />Create</Link>
      <Link to="/messages">✉<br />Inbox</Link>
      <Link to="/profile">♙<br />Profile</Link>
    </nav>
  );
}