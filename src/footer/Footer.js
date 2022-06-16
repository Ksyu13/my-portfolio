import React from "react";
import style from "./Footer.module.css";
import styleContainer from "../common/styles/Container.module.css";
import { BsWhatsapp } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";
import { FaViber } from "react-icons/fa";
import Fade from "react-reveal/Fade";

function Footer() {
    return (
        <div className={style.footerBlock}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <Fade left big cascade>
                    <div className={style.footer}>
                        <div className={style.socialIcon}>
                            <a href="##">
                                <BsWhatsapp />
                            </a>
                        </div>
                        <div className={style.socialIcon}>
                            <a href="##">
                                <FaTelegramPlane />
                            </a>
                        </div>
                        <div className={style.socialIcon}>
                            <a href="##">
                                <FaViber />
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
