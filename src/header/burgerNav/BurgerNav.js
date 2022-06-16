import React, { useState } from 'react';
import style from './BurgerNav.module.css';
import { Link, animateScroll as scroll } from 'react-scroll';
import { GiHamburgerMenu } from 'react-icons/gi';

function BurgerNav() {
  const [menuIsOpen, setBurgerMenu] = useState(false);

  let onBurgerBtnClick = () => {
    setBurgerMenu(
      !menuIsOpen
    );
    console.log(menuIsOpen);
  };

  return (
    <div className={style.burgerNav}>
      <div className={menuIsOpen ? `${style.burgerNavItems} ${style.show}` : style.burgerNavItems}>
        <Link
          activeClass={style.active}
          to="main"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >Main</Link>
        <Link
          activeClass={style.active}
          to="skills"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >Skills</Link>
        <Link
          activeClass={style.active}
          to="works"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >Projects</Link>
        <Link
          activeClass={style.active}
          to="contacts"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >Contacts</Link>
      </div>
      <GiHamburgerMenu onClick={onBurgerBtnClick} className={style.burgerBtn} />
    </div >
  );
}

export default BurgerNav;