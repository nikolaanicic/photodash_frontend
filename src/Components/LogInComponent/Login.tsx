import "./login.css";
import "../Common/commonStyles.css";
import { useForm } from "react-hook-form";
import { useSearchParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { InputError } from "../InputErrorComponent/InputError";
import { Button } from "../StyledButton/Button";

interface LoginData {
  username: string;
  password: string;
}

export const Login = () => {
  const [searchParams] = useSearchParams();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LoginData>();

  const username = useState<string>("");
  const password = useState<string>("");

  const handleLogin = ({ username, password }: LoginData) => {
    if (username !== "" && password !== "") {
      //zahtev ka api za login

      console.table({ username, password });
    }
  };

  return (
    <div className="login-form-container">
      <form onSubmit={handleSubmit(handleLogin)}>
        {errors.username && InputError(errors.username.message)}
        <div className="field-container">
          <input
            {...register("username", { required: "Username is required" })}
            className="form-input-field"
            name="username"
            placeholder="Username"
            type="text"
          ></input>
        </div>
        {errors.password && InputError(errors.password.message)}
        <div className="field-container">
          <input
            {...register("password", { required: "Password is required" })}
            className="form-input-field"
            name="password"
            placeholder="Password"
            type="password"
          ></input>
        </div>
        <div className="button-container">{Button("Log In")}</div>
      </form>
    </div>
  );
};
