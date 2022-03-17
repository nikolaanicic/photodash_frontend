import React, { useEffect, useState } from "react";
import "./header.css";
import { Logo } from "../LogoComponent/Logo";
import { Button } from "../StyledButton/Button";
import { Search } from "../SearchComponent/Search";
import { IsLoggedIn, LogUserOut } from "../../Services/authService";

export const Header = (toggleLogin: any, toggleSignUp: any) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const checkLoggedIn = () => {
    setIsLoggedIn(IsLoggedIn());
  };

  useEffect(() => {
    checkLoggedIn();
  }, [window.localStorage.token]);

  return (
    <div className="col-container">
      <div className="header-container">
        <div className="col-1 logo-container">
          <Logo />
        </div>
        <div className="col-2 search-container">
          <Search />
        </div>
        <div className="col-1 menu-button-container">
          {Button(
            isLoggedIn ? "Log Out" : "Log In",
            isLoggedIn
              ? () => {
                  LogUserOut();
                  checkLoggedIn();
                  toggleLogin();
                }
              : () => {
                  toggleLogin();
                }
          )}
        </div>
        <div className="col-1 menu-button-container">
          {!IsLoggedIn() && Button("Sign Up", toggleSignUp)}
        </div>
      </div>
      <hr className="header-ruler" />
    </div>
  );
};
