import { Card } from "../CardComponent/Card";
import { Button } from "../StyledButton/Button";

export const Menu = (toggleLogin: any, toggleSignUp: any) => {
  const menuChildren: JSX.Element = (
    <div className="options-container">
      <div className="option">{Button("Log In", toggleLogin)}</div>
      <div className="option">{Button("Sign Up", toggleSignUp)}</div>
    </div>
  );

  return menuChildren;
};
