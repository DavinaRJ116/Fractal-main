import React from "react";
import { Routes, Route } from "react-router-dom";
import Post from "../components/Post";
import Postcom from "../components/Postcom";

const PostRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Post />} />         {/* /post */}
      <Route path="postcom" element={<Postcom />} /> {/* /post/postcom */}
    </Routes>
  );
};

export default PostRouter;
