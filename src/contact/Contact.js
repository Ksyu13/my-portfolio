import React from 'react';
import style from './Contact.module.css';
import styleContainer from '../common/styles/Container.module.css';


function Contact() {
    return (
        <div className={style.contactBlock}>
            <div className={`${styleContainer.conteyner} ${style.contactContainer}`}>
                <h2 className={style.title}>Contact</h2>
                <p>If you wanna get in touch, talk to me about a project collaboration or just say hi,
                    fill in the awesome form below or send an email.</p>
                <div className={style.contact}>
                    <form className={style.contactForm}>
                        <input name="email" type="text" placeholder="Email" />
                        <input name="name" type="text" placeholder="Name" />
                        <textarea name="message" placeholder="Message"></textarea>
                        <button type="submit" class="">
                            <span>Send message</span>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;