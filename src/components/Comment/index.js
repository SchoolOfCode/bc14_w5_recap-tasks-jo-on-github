import React from "react";

function Comment({ comment }) {
  return (
    <div className="author">
      <p className="authorInitials">{comment.authorInitials}</p>
      <p className="authorName">{comment.authorName}</p>
      <p className="authorComment">{comment.authorComment}</p>
      <p className="authorDate">{comment.authorDate}</p>

    </div>

  )
}

export default Comment;
