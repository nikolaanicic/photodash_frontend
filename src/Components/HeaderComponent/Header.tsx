import React from "react";
import "./header.css";
import { Logo } from "../LogoComponent/Logo";
import { Button } from "../StyledButton/Button";
import { Search } from "../SearchComponent/Search";

export const Header = () => {
  const handleMenuButtonClick = () => {
    console.log("Menu button click");
  };

  return (
    <>
      <div className="header-container">
        <div className="col-1 logo-container">
          <Logo />
        </div>
        <div className="col-2 search-container">
          <Search />
        </div>
        <div className="col-1 menu-button-container">
          {Button("&#8801;", handleMenuButtonClick)}
        </div>
      </div>
      <hr />
    </>
  );
};
