
import React from "react";

function BlogPost({ blog }) {
  return ( 
    <div className="blog-post">
      <h2 className="blog-post_title">{blog.title}</h2>
      <p3 className="date"> Posted on: {blog.datePosted}</p3>
      <p className="author"> by {blog.author}</p>
      <p className="blog-post_content">{blog.content}</p>
      <img src = {blog.imageSrc} alt = {blog.imageAlt} />
      <p className="blog-post_content">{blog.secondContent}</p>
    </div>
  );
}

export default BlogPost;


