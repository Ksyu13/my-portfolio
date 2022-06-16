import React from 'react';
import style from './Main.module.css';
import styleContainer from '../common/styles/Container.module.css';
import ReactTypingEffect from 'react-typing-effect';
import videoBg from '../assets/video/production ID_4496268.mp4';

function Main() {
    return (
        <div id="main" className={style.mainBlock}>
            <video src={videoBg} autoPlay loop muted />
            <div className={`${styleContainer.container} ${style.mainContainer}`}>
                <div className={style.text}>
                    <span className={style.subtitle}>WELCOME TO MY WORLD </span>
                    <h1 className={style.titleTexts}>Hi There, I'm <span className={style.nameText}> Kseniya Bliznyuk</span>
                        <br />
                        <ReactTypingEffect className={style.animatedTexts}
                            text={["<Frontend Developer/>"]}
                            speed={200}
                            eraseSpeed={20}
                        />
                    </h1>
                    <p>
                        I use animation as a third dimension by which to simplify experiences and kuiding thro each and every interaction. I’m not adding motion just to spruce things up, but doing it in ways that.
                    </p>
                </div>
                <div className={style.photo}></div>
            </div>
        </div>
    );
}

export default Main;