import React from 'react';
import style from './Main.module.css';
import styleContainer from '../common/styles/Container.module.css';
import ReactTypingEffect from 'react-typing-effect';

function Main() {
    return (
        <div id="main" className={style.mainBlock}>
            <div className={`${styleContainer.container} ${style.mainContainer}`}>
                <div className={style.text}>
                    <span className={style.subtitle}>Hi There</span>
                    <h1 className={style.titleTexts}>I'm                        <span className={style.nameText}> Kseniya Bliznyuk</span>
                        <br />
                        <ReactTypingEffect className={style.animatedTexts}
                            text={["<Frontend Developer/>"]}
                            speed={200}
                            eraseSpeed={20}
                        />
                    </h1>
                </div>
                <div className={style.photo}></div>
            </div>
        </div>
    );
}

export default Main;