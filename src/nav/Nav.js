import React from 'react';
import style from './Nav.module.css';
import { Link, animateScroll as scroll } from 'react-scroll';

function Nav() {
  return (
    <div className={style.nav}>
      <a href="#main">Main</a>
      <a href="#skills">Skills</a>
      {/* <a href="#works">Projects</a> */}
      {/* <Link
        activeClass={style.active}
        to="works"
        spy={true}
        smooth={true}
        offset={50}
        duration={500}
        onSetActive={this.handleSetActive}
      >Projects
      </Link> */}
      <a href="#contacts">Contacts</a>
    </div>
  );
}

export default Nav;