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
  firstName: string;
  lastName: string;
  username: string;
  password: string;
}

export const SignUp = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SignUpData>();

  const handleSignUpSubmit = ({
    firstName,
    lastName,
    username,
    password,
  }: SignUpData) => {
    if (errors.username !== undefined && errors.username.message !== undefined)
      console.log(errors.username.message);
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
            type="text"
            placeholder="Password"
          ></input>
        </div>
        {errors.firstName && InputError(errors.firstName.message)}

        <div className="field-container">
          <input
            {...register("firstName", { required: "First Name is required" })}
            className="form-input-field"
            type="text"
            placeholder="First Name"
          ></input>
        </div>
        {errors.lastName && InputError(errors.lastName.message)}

        <div className="field-container">
          <input
            {...register("lastName", { required: "Last Name is required" })}
            className="form-input-field"
            type="text"
            placeholder="Last Name"
          ></input>
        </div>
        <div className="button-container">{Button("Sign Up")}</div>
      </form>
    </div>
  );
};
