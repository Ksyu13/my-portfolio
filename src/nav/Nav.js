import React from 'react';
import style from './Nav.module.css';
import { Link, animateScroll as scroll } from 'react-scroll';

function Nav() {
  return (
    <div className={style.nav}>
      <a href="#main">Main</a>
      <a href="#skills">Skills</a>
      <a href="#works">Projects</a>
      <a href="#contacts">Contacts</a>
    </div>
  );
}

export default Nav;