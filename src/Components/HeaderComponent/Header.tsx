import "./header.css";
import { Logo } from "../LogoComponent/Logo";
import { Button } from "../StyledButton/Button";
import { Search } from "../SearchComponent/Search";
import { IsLoggedIn, LogUserOut } from "../../Services/authService";

export const Header = (toggleLogin: any, toggleSignUp: any) => {
  return (
    <div className="col-container">
      <div className="header-container">
        <div className="col-1 logo-container">
          <Logo />
        </div>
        <div className="col-2 search-container">
          {IsLoggedIn() && <Search />}
        </div>
        <div className="col-1 menu-button-container">
          {Button(
            IsLoggedIn() ? "Log Out" : "Log In",
            IsLoggedIn()
              ? () => {
                  LogUserOut();
                  toggleLogin();
                  window.location.reload();
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
