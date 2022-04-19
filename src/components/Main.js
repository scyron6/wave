import React, { useState } from 'react';

const Main = ({ sendWave }) => {
  const [message, setMessage] = useState('');

  const messageChange = (e) => {
    setMessage(e.target.value);
  };

  return (
    <div className='main'>
      <h1 className='title'>
        Send Me A <span className='text-gradient'>Wave</span>
      </h1>
      <p className='subtitle'>
        Send me a wave and you might receive 0.0001 ETH!
      </p>

      <input
        className='transition-all ring-blue-500'
        id='message'
        type='text'
        name='message'
        placeholder='Your message here...'
        value={message}
        onChange={messageChange}
      />

      <button
        className='wave'
        onClick={() => {
          sendWave(message);
          setMessage('');
        }}>
        Wave at Me
      </button>
    </div>
  );
};

export default Main;
