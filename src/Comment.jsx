import { useState } from "react";
import "./Comment.css";
import CommentsForm from "./CommentsForm"; 
export default function Comment() {
  let [comments, setComments] = useState([
    {
      username: "@sud",
      remarks: "Intelligent",
      rating: 4,
    },
  ]);

  const addnewcomment = (newComment) => {
    setComments((currComments) => [...currComments, newComment]);
  };

  return (
    <>
    <div>
      <h3>All comments</h3>
      {comments.map((comment, idx) => (
        <div className="comment" key={idx}>
          <span>{comment.remarks}</span>
          &nbsp;
          <span>(rating = {comment.rating})</span>
          <p>{comment.username}</p>
        </div>
      ))}
      </div>
      <hr></hr>
      <CommentsForm addnewcomment={addnewcomment} />
      </>
  );
}