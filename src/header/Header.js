import React from 'react';
import Nav from './nav/Nav';
import BurgerNav from './burgerNav/BurgerNav';
import style from './Header.module.css';

function Header() {
  return (
    <div className={style.header}>
      <Nav />
      <BurgerNav />
    </div>
  );
}

export default Header;