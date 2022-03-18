import { Button } from "../StyledButton/Button";
import "./post.css";
import { Card } from "../CardComponent/Card";
import { GetToken } from "../../Services/authService";
import { useState } from "react";

export const Post = ({
  path = "",
  id = "",
  likeCount = 0,
  description = "",
  removeSelf = (id:string) =>{},
  isMine = false
}) => {

  const [likes,setLikes] = useState(likeCount);
  const [comments,setComments] = useState([]);
  const [commentsPage,setCommentsPage] = useState(1);

  const handleGetComments = (id: string) => {

    let reqOptions = {
      method: "get",
      headers: {
        Authorization: GetToken(),
        "content-type": "application/json",
      },
    };

    fetch(`api/post/${id}/comments?pageNumber=${commentsPage}`, reqOptions)
      .then((response) => {
        console.log(response);
        if (response.status === 200) return response.json();
        return Promise.reject(response.status);
      })
      .then((data) => {
        setCommentsPage((p)=>p+1);
        console.log(data);
      });
  };

  const handleLike = () => {
    let reqOptions = {
      method: "get",
      headers: {
        Authorization: GetToken(),
        "content-type": "application/json" ,
      },
    };

    fetch(
      `/api/posts/like/${id}`,
      reqOptions
    )
      .then((response) => {
        if (response.status === 204) return Promise.resolve();
        return Promise.reject(response.status);
      })
      .then(() => {
        console.log('liked');
        setLikes((l)=>l+1);

      })
      .catch(() => {
      });
  };


  const handleDelete = async() =>
  {
    let reqOptions = {
      method:"delete",
      headers:{Authorization:GetToken()}
    };


    await fetch(`/api/posts/${id}`,reqOptions)
    .then((response) =>
    {
      if(response.status === 204)
        return Promise.resolve();
      return Promise.reject();
    }
    ).then(()=>
    {
      removeSelf(id);
    })
  }

  const renderPost = () => {
    return (
      <div className="post-container" key={id}>
        <div className="image-container">
          <img src={"/" + path} alt="slika"></img>
        </div>
        <div className="description-container"><p className="description-text">{description}</p></div>
        <div className="row-container">
          <div>{Button(likes.toString(),handleLike) }</div>
          <div>{Button("&#128488;")}</div>
          {isMine && <div>{Button("&#215;")}</div>}
        </div>
      </div>
    );
  };

  return Card(renderPost(), false);
};
