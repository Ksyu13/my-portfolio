import React from 'react';
import Nav from '../nav/Nav';
import style from'./Header.module.css';

function Header() {
  return (
    <div className={style.header}>
      <Nav/>
    </div>
  );
}

export default Header;