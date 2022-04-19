import React from 'react';

const Message = ({ wave }) => {
  const month = wave.timestamp.getMonth() + 1;

  return (
    <div className='message-card'>
      <div className='top-row'>
        <h3>{wave.address}</h3>
        <p>
          {month.toString() +
            '/' +
            wave.timestamp.getDate().toString() +
            '/' +
            wave.timestamp.getFullYear().toString() +
            ' '}
          {wave.timestamp.getHours().toString() +
            ':' +
            wave.timestamp.getMinutes().toString()}
        </p>
      </div>
      <h5>{wave.message}</h5>
    </div>
  );
};

export default Message;
