import React from 'react';
import style from './Works.module.css';
import styleContainer from '../common/styles/Container.module.css';
import Work from './work/Work';
import Title from '../common/components/title/Title';
import todoList from '../assets/images/todo.jpg';
import games from '../assets/images/games.jpg';


function Works() {
    const todoImage = {
        backgroundImage: `url(${todoList})`
    };

    const gamesImage = {
        backgroundImage: `url(${games})`
    };

    return (
        <div className={style.worksBlock}>
            <div className={`${styleContainer.container} ${style.worksContainer}`}>
                <Title text={"My Projects"}/>
                <p>Check out my latest web software development portfolio projects.</p>
                <div className={style.works}>
                    <Work style={todoImage} title={"To Do List"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem facilis reiciendis dicta iusto explicabo "} path={"http://ksyu13.github.io/to-do-list/"}/> 
                    <Work style={gamesImage} title={"Games"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit."}/>
                    </div>
            </div>
        </div>
    );
}

export default Works;