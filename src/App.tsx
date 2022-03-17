import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./Components/HeaderComponent/Header";
import { Footer } from "./Components/FooterComponent/Footer";
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
