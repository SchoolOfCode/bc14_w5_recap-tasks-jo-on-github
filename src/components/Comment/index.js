import React from "react";


const Comment = ({ comment }) => {
  const initials = comment.authorName
  .split(" ")
  .map((name) => name.charAt(0))
  .join("")
  .toUpperCase();

// Explanation from chatGPT:
  // In this code, the authorName property is first split into an array 
  // of names using the split method.
  // Then the first letter of each name is extracted using the charAt(0) 
  // method.
  // and finally, the first letters are joined into a string using the 
  // join method. 
  // The toUpperCase method is used to convert the initials to 
  // uppercase.
  // and then the resulting initials string is used inside the red circle.

  return (
    <div className="author">
      <p className="authorInitials">{initials}</p>
      <p className="authorName">{comment.authorName}</p>
      <p className="authorComment">{comment.authorComment}</p>
      <p className="authorDate">Comment left on {comment.authorDate}</p>

    </div>

  )
}

export default Comment;
