import "./login.css";
import "../Common/commonStyles.css";
import { useForm } from "react-hook-form";
import { InputError } from "../InputErrorComponent/InputError";
import { Button } from "../StyledButton/Button";
import { LogUserIn } from "../../Services/authService";

interface LoginData {
  username: string;
  password: string;
}

export const Login = (props: any) => {
  const handleLogin = async ({ username, password }: LoginData) => {
    if (username !== "" && password !== "") {
      let data = { username: username, password: password };
      let reqInfo = {
        method: "post",
        body: JSON.stringify(data),
        headers: { "content-type": "application/json" },
      };

      await fetch("/api/user/login", reqInfo)
        .then((response) => {
          if (response.status === 200) return response.json();
          return Promise.reject();
        })
        .then((data) => {
          LogUserIn(data.token, data.role);
          console.log(data);
          props.success();
        })
        .catch(() => {
          setError("username", {
            type: "manual",
            message: "Invalid username or password",
          });
        });
    }
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<LoginData>();
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
