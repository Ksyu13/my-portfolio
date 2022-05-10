import React from 'react';
import style from './Skills.module.css';
import styleContainer from '../common/styles/Container.module.css';
import Skill from './skill/Skill';

function Skills() {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <h2 className={style.title}>Skills</h2>
                <p>Check out my latest web software development portfolio projects.</p>
                <div className={style.skills}>
                    <Skill title={"HTML"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit."}/>
                    <Skill title={"CSS"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit."}/>
                    <Skill title={"Js"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit."}/>
                    <Skill title={"React"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit."}/>
                </div>
            </div>
        </div>
    );
}

export default Skills;