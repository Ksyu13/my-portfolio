import React from 'react';
import style from './Footer.module.css';
import styleContainer from '../common/styles/Container.module.css';


function Footer() {
    return (
        <div className={style.footerBlock}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <div className={style.footer}>
                    <div className={style.icon}></div>
                    <div className={style.icon}></div>
                    <div className={style.icon}></div>
                </div>
                <p>© 2022. All rights reserved by Kseniya Bliznyuk</p>
            </div>
        </div>
    );
}

export default Footer;