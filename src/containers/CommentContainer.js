import React, { useState } from "react";
import Comment from "../components/Comment";

const CommentContainer = () => {
  const [comment, setComment] = useState("");
  const [messages, setMessages] = useState([]);

  const handleComment = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newComment = {
      id: messages.length,
      data: comment,
    };
    setMessages([...messages, newComment]);
    setComment("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type='text' value={comment} onChange={handleComment} />
        <input type='submit' />
      </form>
      <Comment messages={messages} setMessages={setMessages} />
    </div>
  );
};

export default CommentContainer;
