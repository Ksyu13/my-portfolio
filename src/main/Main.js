import React from 'react';
import style from './Main.module.css';
import styleContainer from '../common/styles/Container.module.css';

function Main() {
    return (
        <div className={style.mainBlock}>
            <div className={styleContainer.container}>
                <div className={style.text}>
                    <span>Hi There</span>
                    <h1 className={style.titleTexts}>I am 
                        <span className={style.nameText}> Kseniya Bliznyuk</span>
                        <br />
                        <span className={style.animatedTexts}>Frontend Developer</span>
                    </h1>
                </div>
                <div className={style.photo}></div>
            </div>
        </div>
    );
}

export default Main;