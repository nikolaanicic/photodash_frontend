import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./Components/HeaderComponent/Header";
import { Login } from "./Components/LogInComponent/Login";
import { Footer } from "./Components/FooterComponent/Footer";
import { Card } from "./Components/CardComponent/Card";
import { SignUp } from "./Components/SignUpComponent/SignUp";
import { UserProfile } from "./Components/UserProfileComponent/UserProfile";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <UserProfile />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
