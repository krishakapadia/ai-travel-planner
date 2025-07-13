import React from 'react';
import { Button } from '../ui/button';

function Header() {
  return (
    <div className='flex items-center justify-between p-3 px-5 shadow-sm'>
      <img src='logo.svg' />
      <div>
        <Button>Sign In</Button>
      </div>
    </div>
  );
}

export default Header;
