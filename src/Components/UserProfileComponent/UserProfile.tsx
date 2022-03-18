import { Button } from "../StyledButton/Button";
import "./userProfile.css";
import { Link } from "react-router-dom";
import { GetToken, GetUsername } from "../../Services/authService";
import * as _ from "lodash";
import { useEffect, useState } from "react";

export const UserProfile = (props: any) => {
  const [posts, setPosts] = useState<any>([]);
  const [page, setPage] = useState(1);

  const [hasNext, setHasNext] = useState(true);
  const [totalPages, setTotalPages] = useState(0);

  const handleGetUserPosts = async () => {
    if (!hasNext || (totalPages !== 0 && page > totalPages)) return;

    console.log("getting page" + page.toString());

    let reqOptions = {
      method: "get",
      headers: {
        "content-type": "application/json",
        Authorization: GetToken(),
      },
    };

    await fetch(
      `/api/posts/${GetUsername()}?pageNumber=${page}&pageSize=${3}`,
      reqOptions
    )
      .then((response) => {
        if (response.status === 200) return response.json();
        return Promise.reject(response.status);
      })
      .then((data) => {
        if (totalPages === 0) setTotalPages(data.meta.totalPages);
        if (data.meta.hasNext === false) setHasNext(data.meta.hasNext);
        setPosts([...posts,...data.data]);
        setPage((p) => p + 1);
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(posts.length);
  };

  window.onscroll = _.debounce(() => {
    handleScroll();
  }, 100);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop  ===
      document.documentElement.offsetHeight
    )
      handleGetUserPosts();
  };

  useEffect(() => {
    handleGetUserPosts();
  },[page]);

  const renderPostsGrid = (posts: any): JSX.Element => {
    return posts.map((x: any) => {
      return (
        <Link key={x.id} to={`post/${x.id}`}>
          <div className="post-grid-item">
            <div className="grid-image">
              <img src={"/" + x.imagePath} alt="slika" className="img"></img>
            </div>
          </div>
        </Link>
      );
    });
  };

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
          {!props.isSelf && (
            <div className="follow-button-container">{Button("Follow")}</div>
          )}
        </div>
      </div>
      <div className="posts-grid">{renderPostsGrid(posts)}</div>
    </>
  );
};
