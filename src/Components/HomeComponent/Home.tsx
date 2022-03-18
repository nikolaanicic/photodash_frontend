import { useEffect, useState } from "react";
import { GetToken } from "../../Services/authService";
import { Post } from "../PostComponent/Post";
import "./home.css";
import * as _ from "lodash";

export const Home = () => {
  const [posts, setPosts] = useState<any>([]);
  const [page, setPage] = useState(1);

  const [hasNext, setHasNext] = useState(true);
  const [totalPages, setTotalPages] = useState(0);

  const handleGetNewestPosts = async () => {
    if (!hasNext || (totalPages !== 0 && page > totalPages)) return;
    let reqOptions = {
      method: "get",
      headers: {
        "content-type": "application/json",
        Authorization: GetToken(),
      },
    };

    await fetch(`api/posts/newest?pageNumber=${page}`, reqOptions)
      .then((response) => {
        if (response.status === 200) return response.json();
        return Promise.reject(response.status);
      })
      .then((data) => {
        if (totalPages === 0) setTotalPages(data.meta.totalPages);
        if (data.meta.hasNext === false) setHasNext(data.meta.hasNext);
        setPosts((posts: any) => {
          return [...posts, ...data.data];
        });
        setPage((page) => page + 1);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  window.onscroll = _.debounce(() => {
    handleScroll();
  }, 100);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    )
      handleGetNewestPosts();
  };

  const renderPost = (post: any) => {
    return (
      <Post
        path={post.imagePath as string}
        likeCount={post.likeCount as number}
        id={post.id as string}
        description={post.description as string}
      />
    );
  };

  useEffect(() => {
    handleGetNewestPosts();
  });

  return (
    <div className="scroll-container">
      {posts && posts.map((post: any) => renderPost(post))}
    </div>
  );
};
