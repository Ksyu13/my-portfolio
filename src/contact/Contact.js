import React from 'react';
import style from './Contact.module.css';
import styleContainer from '../common/styles/Container.module.css';
import Title from '../common/components/title/Title';
import Fade from 'react-reveal/Fade';


function Contact() {
    return (
        <div id="contacts" className={style.contactBlock}>
            <div className={`${styleContainer.container} ${style.contactContainer}`}>
                <Title text={"Contacts"} />
                <Fade left big cascade>
                    <p>If you wanna get in touch, talk to me about a project collaboration or just say hi,
                        fill in the awesome form below or send an email.</p>
                </Fade>
                <div className={style.contact}>
                    <Fade bottom big cascade>
                        <form className={style.contactForm}>
                            <input name="email" type="text" placeholder="Email" />
                            <input name="name" type="text" placeholder="Name" />
                            <textarea name="message" placeholder="Message"></textarea>
                            <button type="submit" className={style.submitButton}>
                                <span>Send message</span>
                            </button>
                        </form>
                    </Fade>
                </div>
            </div>
        </div>
    );
}

export default Contact;