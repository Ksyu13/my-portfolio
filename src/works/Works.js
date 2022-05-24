import React from 'react';
import style from './Works.module.css';
import styleContainer from '../common/styles/Container.module.css';
import Work from './work/Work';
import Title from '../common/components/title/Title';

function Works() {
    return (
        <div className={style.worksBlock}>
            <div className={`${styleContainer.container} ${style.worksContainer}`}>
                <Title text={"My Projects"}/>
                <p>Check out my latest web software development portfolio projects.</p>
                
                <div className={style.works}>
                    <Work title={"Сайт 1"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem facilis reiciendis dicta iusto explicabo perferendis reprehenderit aspernatur repellat blanditiis quis, quibusdam cupiditate accusamus architecto nam incidunt, repellendus magni! Ratione, itaque!Lorem ipsum dolor sit amet consectetur adipisicing elit."} path={"http://ksyu13.github.io/to-do-list/"}/> 
                    <Work title={"Сайт 2"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit."}/>
                    </div>
            </div>
        </div>
    );
}

export default Works;