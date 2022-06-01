import React from 'react';
import style from './Skills.module.css';
import styleContainer from '../common/styles/Container.module.css';
import Skill from './skill/Skill';
import Title from '../common/components/title/Title';
import { FaHtml5 } from 'react-icons/fa';
import { DiCss3 } from 'react-icons/di';
import { IoLogoJavascript } from 'react-icons/io';
import { FaReact } from 'react-icons/fa';
import { FaPhp } from 'react-icons/fa';
import { BsGithub } from 'react-icons/bs';


function Skills() {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <Title text={"Skills"}/>
                <p>Check out my latest web software development portfolio projects.</p>
                <div className={style.skills}>
                    <Skill title={"HTML5"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit."} icon={<FaHtml5/>} />
                    <Skill title={"CSS3, SASS, SCSS"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit."} icon={<DiCss3/>} />
                    <Skill title={"Java Script"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit."} icon={<IoLogoJavascript/>}/>
                    <Skill title={"React"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit."} icon={<FaReact/>}/>
                    <Skill title={"PHP"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit."} icon={<FaPhp/>}/>
                    <Skill title={"GitHub"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit."} icon={<BsGithub/>}/>
                </div>
            </div>
        </div>
    );
}

export default Skills;