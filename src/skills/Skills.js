import React from 'react';
import style from './Skills.module.css';
import styleContainer from '../common/styles/Container.module.css';

function Skills() {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.conteyner} ${style.skillsContainer}`}>
                <h2 className={style.title}>Skills</h2>
                <div className={style.skills}>
                    <div className={style.text}>
                        <span>Hi There</span>
                        <p>Frontend Developer</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;