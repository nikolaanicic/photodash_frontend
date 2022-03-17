import "../Common/commonStyles.css";
import { useForm } from "react-hook-form";
import {
  validateUsername,
  validatePassword,
  validateNotEmptyField,
} from "../../Services/Validation/validators";
import { Button } from "../StyledButton/Button";
import { InputError } from "../InputErrorComponent/InputError";

interface SignUpData {
  username: string;
  password: string;
}

export const SignUp = (props: any) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<SignUpData>();

  const handleSignUpSubmit = async ({ username, password }: SignUpData) => {
    if (username !== "" && password !== "") {
      let data = {
        username: username,
        password: password,
      };
      let reqOptions = {
        method: "post",
        body: JSON.stringify(data),
        headers: { "content-type": "application/json" },
      };

      await fetch("/api/user/register", reqOptions)
        .then(async (response) => {
          if (response.status === 200) return Promise.resolve();
          return Promise.reject(
            "Username is taken or the password is too short"
          );
        })
        .then(() => {
          props.success();
        })
        .catch((data) => {
          console.log(data);
          setError("username", { type: "manual", message: data });
        });
    }
  };

  return (
    <div className="sign-up-container">
      <form onSubmit={handleSubmit(handleSignUpSubmit)}>
        {errors.username && InputError(errors.username.message)}
        <div className="field-container">
          <input
            {...register("username", { required: "Username is required" })}
            placeholder="Username"
            className="form-input-field"
            type="text"
          ></input>
        </div>
        {errors.password && InputError(errors.password.message)}
        <div className="field-container">
          <input
            {...register("password", {
              required: "Password is required",
            })}
            className="form-input-field"
            type="password"
            placeholder="Password"
          ></input>
        </div>
        <div className="button-container">{Button("Sign Up")}</div>
      </form>
    </div>
  );
};
