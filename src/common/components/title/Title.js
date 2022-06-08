import React from 'react';
import style from './Title.module.css';
import Slide from 'react-reveal/Slide';

function Title(props) {
    return (
        <Slide left cascade>
            <div className={style.title}>
                <h2>{props.text}</h2>
            </div>
        </Slide>   
    )
}
export default Title;