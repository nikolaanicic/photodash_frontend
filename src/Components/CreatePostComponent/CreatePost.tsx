import { useForm } from "react-hook-form";
import "../Common/commonStyles.css";
import { InputError } from "../InputErrorComponent/InputError";
import { Button } from "../StyledButton/Button";
import { GetToken } from "../../Services/authService";

interface PostData {
  image: any;
  description: "";
}

export const CreatePost = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PostData>();

  const handlePosting = ({ image, description }: PostData) => {
    if (image !== undefined && image !== null) {
      let data = new FormData();
      data.append("image", image[0]);
      data.append("description", description);
      data.append("posted", new Date().toJSON());

      let reqOptions = {
        method: "post",
        headers: {
          Authorization: GetToken(),
        },
        body: data,
      };

      fetch("/api/posts", reqOptions)
        .then((response) => {
          if (response.status === 200) return Promise.resolve();
          return Promise.reject();
        })
        .then((data) => {
          console.log("ok");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(handlePosting)}
        encType="multipart/form-data"
      >
        <div className="field-container">
          <input
            {...register("image", { required: "Image is required" })}
            type="file"
            className="form-input-field"
            name="image"
          ></input>
          {errors.image && InputError(errors.image.message)}
        </div>
        <div className="field-container">
          <input
            {...register("description")}
            name="description"
            placeholder="Description"
            type="text"
            className="form-input-field"
          />
        </div>
        <div className="button-container">{Button("Post")}</div>
      </form>
    </div>
  );
};
