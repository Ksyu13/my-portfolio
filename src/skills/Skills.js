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
import Fade from 'react-reveal/Fade';



function Skills() {
    return (
        <div id="skills" className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <Title text={"Skills"} />
                <Fade left big cascade>
                    <p>Check out my latest web software development portfolio projects.</p>
                </Fade>
                <Fade left big cascade>
                    <div className={style.skills}>
                        <Skill title={"HTML5"} description={"Markup language used to structure and present content on the World Wide Web."} icon={<FaHtml5 />} />
                        <Skill title={"CSS3, SASS, SCSS"} description={"Style sheet language used for describing the presentation of a document written in a markup language such as HTML."} icon={<DiCss3 />} />
                        <Skill title={"Java Script"} description={"Programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS."} icon={<IoLogoJavascript />} />
                        <Skill title={"React"} description={"JavaScript library for building user interfaces or UI components."} icon={<FaReact />} />
                        <Skill title={"PHP"} description={"General-purpose scripting language geared toward web development."} icon={<FaPhp />} />
                        <Skill title={"GitHub"} description={"Provider of Internet hosting for software development and version control using Git"} icon={<BsGithub />} />
                    </div>
                </Fade>
            </div>
        </div>
    );
}

export default Skills;