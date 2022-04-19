import React from 'react';
import Message from './Message.js';

const Messages = ({ waves }) => {
  return (
    <div className='messages'>
      <div className='heading'>
        <h2>Waves</h2>
      </div>
      {waves.map((wave, index) => {
        return <Message wave={wave} key={index} />;
      })}
    </div>
  );
};

export default Messages;
