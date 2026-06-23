import { supabase } from './lib/supabase'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import CreatePage from "./pages/CreatePage";
import MessagesPage from "./pages/MessagesPage";
import ProfilePage from "./pages/ProfilePage";

import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";

function App() {
console.log('Supabase connected:', supabase)
  return (
    <BrowserRouter>
      <div className="app-shell">
        <Navbar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/create" element={<CreatePage />} />
          <Route path="/messages" element={<MessagesPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;