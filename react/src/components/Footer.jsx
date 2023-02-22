import React from "react";
import { FaFacebookF, FaLinkedin, FaInstagram } from "react-icons/fa";

function Footer () {
    const facebook = "https://www.facebook.com/profile.php?id=100001522158742";
    const linkedin = "https://www.linkedin.com/in/hsiaohan-yeh-996807208/";
    const instergram = "https://www.instagram.com/hsiao_han84/";
    return (
        <div className="footer">
            <div className="container">
                <div className="footerSection">
                    <div className="row justifyConter">
                        <div className="footer-content">
                            {/* <div className="footer-section-logo">
                                <img src="./image/footer-logo.png" alt="" />
                            </div> */}
                            <ul className="footerCircles">
                                <li><a href={facebook}><FaFacebookF className="footerIcon" /></a></li>
                                <li><a href={linkedin}><FaLinkedin className="footerIcon" /></a></li>
                                <li><a href={instergram}><FaInstagram className="footerIcon" /></a></li>
                            </ul>
                            <div className="copy-right-content">
                                <p className="copyright">Copyright {new Date().getFullYear()} | All Rights Reserved.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;