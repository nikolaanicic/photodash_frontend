import React, { SyntheticEvent } from "react";
import "./search.css";
import { useForm } from "react-hook-form";
import { useSearchParams, useNavigate } from "react-router-dom";

interface FormData {
  username: string;
}

export const Search = (e: any) => {
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();
  const { register, handleSubmit, reset } = useForm<FormData>();

  const usernameForSearch = searchParams.get("username") || "";

  const handleSearchSubmit = ({ username }: FormData) => {
    if (username !== "") {
      //   navigate("/search?username=`${username}`");
      console.log(username);
      reset({ username: "" });
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(handleSearchSubmit)}>
        <input
          {...register("username")}
          defaultValue={usernameForSearch}
          type="text"
          placeholder="Search"
          className="search-input"
        ></input>
      </form>
    </div>
  );
};
