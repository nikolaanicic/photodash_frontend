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
    setError,
  } = useForm<PostData>();

  const handlePosting = ({ image, description }: PostData) => {
    if (image !== undefined && image !== null) {
      var reader = new FileReader();
      reader.readAsDataURL(image[0]);
      reader.onload = function () {
        console.log(reader.result);
      };

      let data = {
        image: reader.result,
        description: description,
        posted: new Date().toJSON(),
      };

      let reqOptions = {
        method: "post",
        headers: {
          "content-type": "application/json",
          Authorization: GetToken(),
        },
        body: JSON.stringify(data),
      };
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(handlePosting)}>
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
