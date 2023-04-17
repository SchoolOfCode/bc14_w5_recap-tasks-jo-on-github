import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App";
import * as serviceWorker from "./serviceWorker";
import BlogPost  from "./components/BlogPost";
import Comment from "./components/Comment";

const root = ReactDOM.createRoot(document.getElementById("root"));

const blog = {
  title: "This is what a Blog Post looks like",
  author: "Jo Chattoo",
  datePosted: "2023-04-16",
  content: "This is a blog post written using React. React is a library for building user interfaces. It's also very difficult to learn. Nevertheless, I'm going to try and build a blog post using React. Wish me luck!",
  imageSrc: "https://swizec.com/static/57d28f99a4d08c58c0fdd558030a0153/b0a15/p5x14.webp",
  imageAlt: "React Raccoon",
  secondContent: "This is a second bit of a blog post written using React. React is a library for building user interfaces. It's also very difficult to learn. Nevertheless, I'm going to try and build a blog post using React. Wish me luck!",
};

const comment = {
  authorName: "Jo Chattoo",
  authorInitials: "AC",
  authorComment: "This is a comment",
  authorDate: "2023-04-16",
};

root.render(
  <React.StrictMode>
    <App />
    <BlogPost blog={blog}/>
    <Comment comment={comment}/>
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
