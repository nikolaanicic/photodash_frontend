import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./Components/HeaderComponent/Header";
import { Footer } from "./Components/FooterComponent/Footer";
import { UserProfile } from "./Components/UserProfileComponent/UserProfile";
import { Login } from "./Components/LogInComponent/Login";
import { SignUp } from "./Components/SignUpComponent/SignUp";
import { Card } from "./Components/CardComponent/Card";
import { Post } from "./Components/PostComponent/Post";
import { CreatePost } from "./Components/CreatePostComponent/CreatePost";

function App() {
  const [modal, setModal] = useState<JSX.Element | null>();

  const [loginVisible, setLoginVisible] = useState(false);
  const [signUpVisible, setSignUpVisible] = useState(false);
  const [postFormVisible, setPostFormVisible] = useState(false);

  const resetModal = () => {
    setModal(null);
  };
  const toggleLogin = () => {
    setSignUpVisible(false);
    if (!loginVisible) {
      setModal(<Login success={resetModal} />);
      setLoginVisible(true);
    } else {
      setModal(null);
      setLoginVisible(false);
    }
  };

  const toggleSignUp = () => {
    setLoginVisible(false);
    if (!signUpVisible) {
      setModal(<SignUp success={resetModal} />);
    } else {
      setModal(null);
    }
    setSignUpVisible(!signUpVisible);
  };

  const togglePostForm = () => {
    setPostFormVisible(false);
    if (!postFormVisible) {
      setModal(<CreatePost />);
      setPostFormVisible(true);
    } else {
      setModal(null);
    }
    setPostFormVisible(!postFormVisible);
  };

  return (
    <>
      {modal && Card(modal, true)}
      <BrowserRouter>
        <div className="App">
          {Header(toggleLogin, toggleSignUp)}
          {Footer(togglePostForm)}
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
