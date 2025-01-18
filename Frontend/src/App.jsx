import { useState } from "react";
import "./App.css";
import Dashboard from "./components/Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./components/Profile";
import Home from "./components/Auth/Home";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
import ForgotPass from "./components/Auth/ForgotPass";
import About from "./components/Auth/About";
import Contact from "./components/Auth/Contact";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/event/:eventId" element={<Event/>} />
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/forgotpass" element={<ForgotPass/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/contact" element={<Contact/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
