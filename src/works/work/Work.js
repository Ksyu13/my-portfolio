import React from 'react';
import style from './Work.module.css';


function Work(props) {
    return (
        <div className={style.work}>
            <div className={style.image} style={props.style}>
                <a href={props.path} className={style.viewButton}>Whatch</a>
            </div>
            <h3 className={style.projectTitle}>{props.title}</h3>
            <span className={style.description}>
                {props.description}
            </span>
            <a href={props.pathGit} className={style.viewGit} >GitHub</a>
        </div>

    );
}

export default Work;