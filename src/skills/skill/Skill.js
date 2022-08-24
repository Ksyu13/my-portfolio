import React from 'react';
// import { Tilt } from 'tsparticles-engine';
import style from './Skill.module.css';
import Tilt from 'react-parallax-tilt';


function Skill(props) {
    return (
        <Tilt className={`${style.parallaxEffect} ${style.skill}`} perspective={2000} scale={1.1} >
            {/* <div className = { style.skill }> */}
            < div className={style.innerElement}  >
                <span className={style.icon}>
                    {props.icon}
                </span>
                <h3>{props.title}</h3>
                <span className={style.description}>
                    {props.description}
                </span>
            </div >
            {/* </div> */}
        </Tilt >

    );
}

export default Skill;