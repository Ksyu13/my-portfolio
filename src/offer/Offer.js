import React from 'react';
import style from './Offer.module.css';
import styleContainer from '../common/styles/Container.module.css';
import Title from '../common/components/title/Title';


function Offer() {
    return (
        <div className={style.offerBlock}>
            <div className={`${styleContainer.container} ${style.offerContainer}`}>
                <Title text={"Let's get to work"}/>
                <p>Open for your suggestions. I consider full-time offers, including remote work.</p>
                <a href="##" className={style.offerButton}>Hire me</a>
            </div>
        </div>
    );
}

export default Offer;