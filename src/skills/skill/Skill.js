import React from 'react';
import style from './Skill.module.css';


function Skill(props) {
    return (
        <div className={style.skill}>
            <span className={style.icon}>
                {props.icon}
            </span>
            <h3>{props.title}</h3>
            <span className={style.description}>
                {props.description}
            </span>
        </div>

    );
}

export default Skill;