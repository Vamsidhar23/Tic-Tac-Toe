import React from "react";

const Message = ({ winner, onClearGame }) => {
  return (
    <div className="message-container">
      <p>Congratulations! {winner} is the winner.</p>
      <button onClick={onClearGame}>Clear Game</button>
    </div>
  );
};

export default Message;
