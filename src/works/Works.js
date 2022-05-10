import React from 'react';
import style from './Works.module.css';
import styleContainer from '../common/styles/Container.module.css';
import Work from './work/Work';

function Works() {
    return (
        <div className={style.worksBlock}>
            <div className={`${styleContainer.container} ${style.worksContainer}`}>
                
                <h2 className={style.title}>My Works</h2>
                <p>Check out my latest web software development portfolio projects.</p>
                
                <div className={style.works}>
                    <Work title={"Сайт 1"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem facilis reiciendis dicta iusto explicabo perferendis reprehenderit aspernatur repellat blanditiis quis, quibusdam cupiditate accusamus architecto nam incidunt, repellendus magni! Ratione, itaque!Lorem ipsum dolor sit amet consectetur adipisicing elit."}/>
                    <Work title={"Сайт 2"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit."}/>
                    <Work title={"Сайт 3"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem facilis reiciendis dicta iusto explicabo perferendis reprehenderit aspernatur repellat blanditiis quis, quibusdam cupiditate accusamus architecto nam incidunt, repellendus magni! Ratione, itaque!"}/>
                </div>
            </div>
        </div>
    );
}

export default Works;