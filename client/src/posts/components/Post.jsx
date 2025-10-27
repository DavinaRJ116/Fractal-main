import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Post = () => {
  const navigate = useNavigate();
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Post created:", text);

    // Navigate to Postcom and pass the post text
    navigate("/post/postcom", { state: { postText: text } });
  };

  return (
    <section className="container">
      <h1 className="large text-primary">Posts</h1>
      <p className="lead">
        <i className="fas fa-user"></i> Welcome to the community!
      </p>

      <div className="post-form">
        <form className="form my-1" onSubmit={handleSubmit}>
          <textarea
            name="text"
            cols="30"
            rows="5"
            placeholder="Create a post"
            value={text}
            onChange={(e) => setText(e.target.value)}
            required
          ></textarea>
          <input type="submit" className="btn btn-dark my-1" value="Submit" />
        </form>
      </div>
    </section>
  );
};

export default Post;
