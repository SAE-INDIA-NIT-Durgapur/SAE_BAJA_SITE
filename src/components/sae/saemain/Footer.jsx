import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import "../saecss/footer.css";
import {
    AiFillFacebook,
    AiOutlineMail,
    AiOutlineArrowUp,
} from "react-icons/ai";
import { FaArrowCircleUp, FaLinkedin, FaInstagramSquare, FaYoutube } from "react-icons/fa";
import { RiPhoneFindLine } from "react-icons/ri";
import { FiPhoneCall } from "react-icons/fi";
import { BiMailSend } from "react-icons/bi";
import img from "../../../images/sae_logo.png"

const Footer = () => {
    const [visible, setVisible] = useState(false);

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisible(true);
        } else if (scrolled <= 300) {
            setVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
            /* you can also use 'auto' behaviour
                     in place of 'smooth' */

        });
    };

    window.addEventListener("scroll", toggleVisible);
    return (
        <div>
            <footer className="footer-section mt-4">
                <div className="container">
                    <div className="footer-cta pt-5 pb-5">
                        <div className="row">
                            <div className="col-xl-4 col-lg-4 mb-30">
                                <div className="single-cta">
                                    <div className="cta-text">
                                        <RiPhoneFindLine size={32} />
                                        <br />
                                        <h4>Find Us</h4>
                                        <span>
                                            Mahatma Gandhi Rd, A-Zone, Durgapur, West Bengal 713209
                                        </span>
                                    </div>

                                </div>
                            </div>

                            <div className="col-xl-4 col-lg-4 mb-30">
                                <div className="single-cta">
                                    <div className="cta-text">
                                        <AiOutlineMail size={32} />
                                        <br />
                                        <h4>Mail us</h4>
                                        <span className="footer-email">
                                           <a href="mailto:sae.nitdgp1@gmail.com" className="text-muted text-decoration-none">sae.nitdgp1@gmail.com</a>
                                        </span>

                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-4 col-lg-4 mb-30">
                                <div className="single-cta">
                                    <div className="cta-text">
                                        <FiPhoneCall size={32} />
                                        <br />
                                        <h4>Call us</h4>
                                        
                                        <span>Divas Gupta ( <strong>President</strong> )</span>
                                        <span> : <span className="bold">+91</span> 98303 00600</span><br/>
                                        <span>Anurag Singh ( <strong>General Secretary</strong> )</span>
                                        <span> : +91 6386 849 227</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-content pt-5 pb-5">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 mb-50">
                                <div className="footer-widget">
                                    <div className="footer-logo">
                                        <a>
                                            <img src={img} className="img-fluid" alt="logo" style={{ width: "150px" }} />
                                        </a>"
                                    </div>
                                    <div className="footer-text"></div>
                                    <div className="footer-social-icon">
                                        <span>Follow us</span>
                                        <a target="_blank" href="https://www.facebook.com/SAENITD/">
                                            <AiFillFacebook size={32} />
                                        </a>
                                        <a target="_blank" href="https://www.instagram.com/sae.nitd/?hl=en">
                                            <FaInstagramSquare size={32} />
                                        </a>
                                        <a target="_blank" href="https://www.linkedin.com/company/sae-india-nit-dgp-collegiate-chapter/mycompany/">
                                            <FaLinkedin size={32} />
                                        </a>
                                        <a target="_blank" href="https://www.youtube.com/channel/UC9H4onmkThYbMHrce2PceQg">
                                            <FaYoutube size={32} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 mb-30">
                                <div className="footer-widget" >
                                    <div className="footer-widget-heading"  >
                                        <h3>Useful Links</h3>
                                    </div>
                                    <ul>
                                        <li>
                                            <NavLink to="/"  exact>
                                                Home
                                            </NavLink>
                                        </li>

                                        <li>
                                            <NavLink to="/events"   exact>
                                                Events
                                            </NavLink>
                                        </li>

                                        <li>
                                            <NavLink to="/members"    exact>
                                                Members
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/baja"   exact>
                                                BAJA
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/autopia"   exact>
                                                autopia
                                            </NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <button
                                className="text-end float-right "
                                onClick={scrollToTop}
                                style={{
                                    backgroundColor: "red",
                                    padding: "10px 10px 10px 10px",
                                    border: "none",
                                    borderRadius: "10px",
                                    marginTop: "30px",
                                    fontWeight: "bold",
                                }}
                            >
                                <AiOutlineArrowUp
                                    color="white"
                                    size={20}
                                    style={{ display: visible ? "inline" : "none" }}
                                />
                            </button>
                        </div>
                    </div>

                </div>

                <div className="copyright-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12 col-lg-12 text-center text-lg-left">
                                <div className="copyright-text">
                                    <p>Copyright &copy; 2021, All Right Reserved</p>
                                </div>
                            </div>
                        </div>

                    </div>


                </div>
            </footer>
        </div>
    );
};

export default Footer;