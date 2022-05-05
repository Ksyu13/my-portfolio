import React from 'react';
import style from './Offer.module.css';
import styleContainer from '../common/styles/Container.module.css';


function Offer() {
    return (
        <div className={style.offerBlock}>
            <div className={`${styleContainer.conteyner} ${style.offerContainer}`}>
                <h2 className={style.title}>Let's get to work</h2>
                <p>Open for your suggestions. I consider full-time offers, including remote work.</p>
                <button>Hire me</button>
            </div>
        </div>
    );
}

export default Offer;