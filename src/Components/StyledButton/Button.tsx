import React from "react";
import "./button.css";
import parse from "html-react-parser";

export const Button = (text: any, clickHandler?: any) => {
  return (
    <button className="button" onClick={clickHandler}>
      {parse(text)}
    </button>
  );
};
