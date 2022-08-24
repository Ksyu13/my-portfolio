import React from "react";
import style from "./Footer.module.css";
import styleContainer from "../common/styles/Container.module.css";
import { BsWhatsapp } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";
import { FaGithub } from "react-icons/fa"
import Fade from "react-reveal/Fade";

function Footer() {
    return (
        <div className={style.footerBlock}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <Fade left big cascade>
                    <div className={style.footer}>
                        <div className={style.socialIcon}>
                            <a href="https://t.me/kseniya_bliz">
                                <FaTelegramPlane />
                            </a>
                        </div>
                        <div className={style.socialIcon}>
                            <a href="https://github.com/Ksyu13">
                                <FaGithub />
                            </a>
                        </div>
                        <div className={style.socialIcon}>
                            <a href="https://api.whatsapp.com/send?phone=%2B79036409636">
                                <BsWhatsapp />
                            </a>
                        </div>
                    </div>
                    <span className={style.copyright}>
                        © Ryazan 2022. All rights reserved by Kseniya Bliznyuk
                    </span>
                </Fade>
            </div>
        </div>
    );
}

export default Footer;
