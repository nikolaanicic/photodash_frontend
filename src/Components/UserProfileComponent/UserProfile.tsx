import { InfiniteScroll } from "../InfiniteScrollComponent/InfiniteScroll";
import { Button } from "../StyledButton/Button";
import "./userProfile.css";

export const UserProfile = () => {
  return (
    <>
      <div className="profile-header-container">
        <div className="col-1">
          <div className="profile-image-container">
            <img alt="Profile"></img>
          </div>
        </div>
        <div className="col-3 row-container">
          <div className="row">
            <div className="column-item">
              <p>Posts</p>
              <p>3</p>
            </div>
            <div className="column-item">
              <p>Followers</p>
              <p>3</p>
            </div>
            <div className="column-item">
              <p>Following</p>
              <p>3</p>
            </div>
          </div>
          <div className="follow-button-container">{Button("Follow")}</div>
        </div>
      </div>
      <div className="user-posts-container"></div>
    </>
  );
};
