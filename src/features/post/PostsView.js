import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPost } from "./postSlice";

const PostsView = () => {
  const { isLoading, error, posts } = useSelector((state) => state.posts);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPost());
  }, []);

  if (isLoading) {
    return <h1>Loooooooooadingg..............</h1>;
  }
  if (error) {
    return <h1>errorrrrrrrrrrrrrrrrrrrrrrrrrrrrr</h1>;
  }
  return (
    <div>
      {posts.map((post) => {
        return <p>{post.title}</p>;
      })}
    </div>
  );
};

export default PostsView;
