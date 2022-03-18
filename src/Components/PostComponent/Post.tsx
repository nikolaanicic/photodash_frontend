import { Button } from "../StyledButton/Button";
import "./post.css";
import { Card } from "../CardComponent/Card";
import { GetToken } from "../../Services/authService";

export const Post = ({
  path = "",
  id = "",
  likeCount = 0,
  description = "",
  isLiked = false,
}) => {
  let commentPage = 1;

  const handleGetComments = (postId: string) => {
    let token = GetToken();

    let reqOptions = {
      method: "get",
      headers: {
        Authorization: token,
        "content-type": "application/json",
      },
    };

    fetch(`api/post/${postId}/comments?pageNumber=${commentPage}`, reqOptions)
      .then((response) => {
        console.log(response);
        if (response.status === 200) return response.json();
        return Promise.reject(response.status);
      })
      .then((data) => {
        console.log(data);
        commentPage += 1;
      });
  };

  const handleLikeUnlike = (postId: string, isLike: boolean) => {
    let reqOptions = {
      method: "patch",
      headers: {
        Authorization: GetToken(),
      },
    };

    fetch(
      "/api/posts/" + (isLike ? "like" : "unlike") + `/${postId}`,
      reqOptions
    )
      .then((response) => {
        if (response.status === 204) return Promise.resolve();
        return Promise.reject(response.status);
      })
      .then(() => {
        isLiked = true;
      })
      .catch(() => {
        console.log("Not found");
      });
  };

  const renderPost = () => {
    return (
      <div className="post-container" key={id}>
        <div className="image-container">
          <img src={"/" + path} alt="slika"></img>
        </div>
        <div className="row-container">
          <div>{isLiked ? Button("&#9829;") : Button("&#x2715;")}</div>
          <div>{Button("&#128488;")}</div>
        </div>
      </div>
    );
  };

  return Card(renderPost(), false);
};
