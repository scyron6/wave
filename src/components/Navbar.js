import React from 'react';

const Navbar = ({ account, connectWallet }) => {
  return (
    <div className='navbar'>
      <h3 className='text-gradient navbar-title' href='#'>
        Wave
      </h3>
      <button
        className={'connect' + (account ? ' connected' : '')}
        onClick={() => {
          connectWallet();
        }}>
        {account
          ? account.toString().substring(0, 10) + '...'
          : 'Connect Wallet'}
      </button>
    </div>
  );
};

export default Navbar;
