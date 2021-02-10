import React, { useState } from "react";

const Comment = ({ messages, setMessages }) => {
  const [updatedComment, setUpdatedComment] = useState("");

  const handleUpdatedValue = (e) => {
    setUpdatedComment(e.target.value);
  };

  const handleEdit = (e) => {
    const currentData = e.target.classList[0];
    const updatedMessage = messages.find(
      (message) => message.id === currentData
    );
    updatedMessage.data = updatedComment;
    setMessages([...messages, updatedMessage]);
    console.log(messages);
  };

  return messages.map((message) => {
    return (
      <div>
        <input
          type='text'
          value={updatedComment ? updatedComment : message.data}
          onChange={handleUpdatedValue}
        />
        <button className={message.id}>delete</button>
        <button className={message.id} onClick={handleEdit}>
          edit
        </button>
      </div>
    );
  });
};

export default Comment;
