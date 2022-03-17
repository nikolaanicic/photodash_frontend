import "./footer.css";
import { Button } from "../StyledButton/Button";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <hr />
        <div className="footer-container-row">
          <div className="col-1">
            <Link to="/home">{Button("&#8962;", () => {})}</Link>
          </div>
          <div className="col-1">{Button("&#43;", () => {})}</div>
          <div className="col-1">{Button("&#9677;", () => {})}</div>
        </div>
      </div>
    </>
  );
};
