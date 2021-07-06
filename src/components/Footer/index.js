import React from 'react'
import { Link } from 'react-router-dom';

import * as styles from './index.module.scss'

const Footer = () => {
    return (
    <>
        <footer className={styles.footerContainer}>
            <div className={styles.footerWrapper}>
                <div className={styles.row}>
                    <div className={styles.column}>
                        <div className={styles.title}>CONTACT INFO</div>
                        {/* <div className={styles.link}> </div> */}
                        <Link className={styles.link} to="/PuntaStaAnaManila">Punta Sta. Ana Manila</Link>
                        <Link className={styles.link} to="/infoadmin">info@admin.com</Link>
                    </div>
                    <div className={styles.column}>
                        <div className={styles.title}>TOP DESTINATIONS</div>
                        <Link className={styles.link} to="/PuntaStaAnaManila">Punta Sta. Ana Manila</Link>
                        <Link className={styles.link} to="/infoadmin">info@admin.com</Link>
                    </div>
                    <div className={styles.column}>
                        <div className={styles.title}>PARTNERS</div>
                        <Link className={styles.link} to="/OurTourProvider">Our Tour Provider</Link>
                        <Link className={styles.link} to="/VendorDashboard">Vendor Dashboard</Link>
                        <Link className={styles.link} to="/ContributorDashboard">Contributor Dashboard</Link>
                    </div>
                    <div className={styles.column}>
                        <div className={styles.title}></div>
                        <Link className={styles.link} to="/About">About</Link>
                        <Link className={styles.link} to="/WhyBookwithUs">Why Book with Us?</Link>
                        <Link className={styles.link} to="/OurCommunity">Our Community</Link>
                        <Link className={styles.link} to="/TermsandConditions">Terms and Conditions</Link>
                        <Link className={styles.link} to="/PrivacyPolicy">Privacy Policy</Link>
                        <Link className={styles.link} to="/ContactUs">Contact Us</Link>
                        <Link className={styles.link} to="/FAQ">FAQ</Link>
                    </div>
                </div>
            </div>
        </footer>
        {/* <div className={styles.footerContainer}>
            <div className={styles.columnContainer}>
                <div className={styles.column}>
                <p>CONTACT INFO</p>
                <p>Punta Sta. Ana Manila</p>
                <p>info@admin.com</p>
            </div>
            <div className={styles.column}>
                <p>TOP DESTINATIONS</p>
                <p>Punta Sta. Ana Manila</p>
                <p>info@admin.com</p>
            </div>
            <div className={styles.column}>
                <p>PARTNERS</p>
                <p>Our Tour Provider</p>
                <p>Vendor Dashboard</p>
                <p>Contributor Dashboard</p>
            </div>
            <div className={styles.column}>
                <p>About</p>
                <p>Why Book with Us?</p>
                <p>Our Community</p>
                <p>Terms and Conditions</p>
                <p>Privacy Policy</p>
                <p>Contact Us</p>
                <p>FAQ</p>
            </div>
            </div>
        </div> */}
        </>
    )
}


export default Footer

