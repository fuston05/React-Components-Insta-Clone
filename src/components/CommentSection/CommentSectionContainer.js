// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = props => {
  // Add state for the comments
  const [comments, setComments] = useState(props.comments);
  const [id, setId] = useState(props.postId);
  // console.log('comments: ', comments);
  
  return (
    <div>
      {/* map through the comments data and return the Comment component */}
      {
        comments.map(ele => {
          return <Comment key={Math.random()} comment={ele} />
          // console.log('comment from commentSectionContainer: ',ele);
        })
      }
      <CommentInput />
    </div>
  );
};

export default CommentSection;
