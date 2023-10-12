import { Button } from '@mui/joy';
import * as React from 'react';

export default function Selector() {
  return (
    <nav className='nav'>
      <ul>
        <CreateLink href='/players'>Players</CreateLink>
        <CreateLink href='/teams'>Teams</CreateLink>
        <CreateLink href='/awards'>Awards</CreateLink>
      </ul>
    </nav>
  );
    
}

function CreateLink({href, children}) {
  const path = window.location.pathname
  return (
    <Button variant={href === path? 'solid': 'outlined'}>
      <a href={href}>{children}</a>
    </Button>
  )
}