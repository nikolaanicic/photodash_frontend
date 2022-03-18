import "./footer.css";
import { Button } from "../StyledButton/Button";
import { Link } from "react-router-dom";
import { GetUsername, IsLoggedIn } from "../../Services/authService";

export const Footer = (toggleForm: any) => {
  return (
    IsLoggedIn() && (
      <div className="footer-container">
        <hr />
        <div className="footer-container-row">
          <div className="col-1">
            <Link to="/home">{Button("&#8962;", () => {})}</Link>
          </div>
          <div className="col-1">
            {Button("&#43;", () => {
              toggleForm();
            })}
          </div>
          <div className="col-1">
            <Link to={`/${GetUsername()}`}>{Button("&#9677;")}</Link>
          </div>
        </div>
      </div>
    )
  );
};
