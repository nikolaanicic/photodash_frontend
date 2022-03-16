import "./post.css";

export const Post = (imageSrc: string) => {
  return (
    <div className="post-container">
      <div className="row-container">
        <div className="image-container"></div>
      </div>
      <div className="row-container">
        <div className="post-options-container"></div>
      </div>
      <div className="row-container">
        <div className="comments-container"></div>
      </div>
    </div>
  );
};
