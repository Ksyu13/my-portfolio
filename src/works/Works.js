import React from 'react';
import style from './Works.module.css';
import styleContainer from '../common/styles/Container.module.css';
import Work from './work/Work';
import Title from '../common/components/title/Title';
import todoList from '../assets/images/todo.jpg';
import games from '../assets/images/games.jpg';
import Fade from 'react-reveal/Fade';


function Works() {
    const todoImage = {
        backgroundImage: `url(${todoList})`
    };

    const gamesImage = {
        backgroundImage: `url(${games})`
    };

    return (
        <div id="works" className={style.worksBlock}>
            <div className={`${styleContainer.container} ${style.worksContainer}`}>
                <Title text={"My Projects"} />
                <Fade left big cascade>
                    <p>Check out my latest web software development portfolio projects.</p>
                </Fade>
                <Fade left big>
                    <div className={style.works}>
                        <Work style={todoImage} title={"To Do List"} description={"This is a simple pure JS todulist using localStorage to store data."} path={"http://ksyu13.github.io/to-do-list/"} />
                        <Work style={gamesImage} title={"Games"} description={"Website for computer games."} />
                    </div>
                </Fade>
            </div>
        </div>
    );
}

export default Works;