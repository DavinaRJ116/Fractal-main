import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Postcom = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Get the post text passed from Post.jsx
  const newPostText = location.state?.postText;

  // Default posts (John Doe)
  const defaultPosts = [
    {
      id: 1,
      name: "John Doe",
      avatar: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint possimus corporis sunt necessitatibus! Minus nesciunt soluta suscipit nobis. Amet accusamus distinctio cupiditate blanditiis dolor? Illo perferendis eveniet cum cupiditate aliquam?",
      date: "04/16/2019",
    },
    {
      id: 2,
      name: "John Doe",
      avatar: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint possimus corporis sunt necessitatibus! Minus nesciunt soluta suscipit nobis. Amet accusamus distinctio cupiditate blanditiis dolor? Illo perferendis eveniet cum cupiditate aliquam?",
      date: "04/16/2019",
    },
  ];

  // Combine new post (if any) with default posts
  const posts = newPostText
    ? [{ id: 0, name: "You", avatar: "", text: newPostText, date: new Date().toLocaleDateString() }, ...defaultPosts]
    : defaultPosts;

  return (
    <section className="container">
      <button className="btn mb-2" onClick={() => navigate("/post")}>
        Back To Posts
      </button>

      {posts.map((post) => (
        <div key={post.id} className="post bg-white p-1 my-1">
          <div>
            <img
              className="round-img"
              src={post.avatar || "https://www.gravatar.com/avatar/placeholder?s=200"}
              alt={post.name}
            />
            <h4>{post.name}</h4>
          </div>
          <div>
            <p className="my-1">{post.text}</p>
            <p className="post-date">Posted on {post.date}</p>
          </div>
        </div>
      ))}

      <div className="post-form">
        <div className="bg-primary p">
          <h3>Leave A Comment</h3>
        </div>
        <form className="form my-1">
          <textarea
            name="text"
            cols="30"
            rows="5"
            placeholder="Comment on this post"
            required
          ></textarea>
          <input type="submit" className="btn btn-dark my-1" value="Submit" />
        </form>
      </div>
    </section>
  );
};

export default Postcom;
