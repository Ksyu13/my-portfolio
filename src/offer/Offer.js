import React from 'react';
import style from './Offer.module.css';
import styleContainer from '../common/styles/Container.module.css';
import Title from '../common/components/title/Title';
import Fade from 'react-reveal/Fade';


function Offer() {
    return (
        <div className={style.offerBlock}>
            <div className={`${styleContainer.container} ${style.offerContainer}`}>
                <Title text={"Let's get to work"} />
                <Fade left big cascade>
                    <p>Open for your suggestions. I consider full-time offers, including remote work.</p>
                </Fade>
                <Fade left>
                    <a href="#contacts" className={style.offerButton}>Hire me</a>
                </Fade>
            </div>
        </div>
    );
}

export default Offer;