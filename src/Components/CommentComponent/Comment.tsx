import "./comment.css";
import "../Common/commonStyles.css";
import { useEffect, useState } from "react";

export const Comment = (id: string, text: string, likeCount: number) => {
  const [subComments, setSubComments] = useState();

  const renderSubComments = () => {};

  const getSubComments = () => {};

  useEffect(() => {
    const doGetSubComments = async () => {
      //let subComms = await poziv ka api
      //setSubComments(subComms);
    };
    doGetSubComments();
  }, [id]);

  return (
    <div className="comment-container" id={id}>
      <div className="comment-content-container">
        <div className="comment-like-container">
          <button className="like-button">&#9825;</button>
          <p className="like-count">{likeCount}</p>
        </div>
        <div className="comment-text-container">
          <span className="comment-text">{text}</span>
        </div>
      </div>
      <div className="subcomments-container"></div>
    </div>
  );
};
