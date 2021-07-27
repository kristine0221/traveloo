import React, { useState } from 'react'
import { Link } from 'react-router-dom';

import { FaBars } from "@react-icons/all-files/fa/FaBars";
import { FaTimes } from "@react-icons/all-files/fa/FaTimes";

import * as styles from './index.module.scss'


const NavBar = () => {
    const [isOpen, setNavbarOpen] = useState(false)

    const [navBarScroll, setNavBarScroll] = useState(false)

    const changeBgNavBarOnScroll = () => {
        if (window.scrollY >= 80) {
            setNavBarScroll(true);
        } else {
            setNavBarScroll(false);
        }
        console.log(window.scrollY)
    }

    window.addEventListener('scroll', changeBgNavBarOnScroll);

    return (
        <div className={`${styles.navbarContainer} ${navBarScroll && styles.active} ${isOpen && styles.navBarOpenHeight}`}>
            {/* Wrapper  */}
            <div className={styles.navbarWrapper}>
                {/* Logo */}
                <div className={styles.logoWrapper}>
                    <div className={styles.logo}>LOGO</div>
                </div>
                {/* Links */}
                <div className={`${styles.linksWrapper} ${isOpen ? styles.navBarOpen : styles.navBarClose}`}>
                    <Link className={styles.links} to="/About-Us">About Us</Link>
                    <Link className={styles.links} to="/How-it-Works">How it Works</Link>
                    <Link className={styles.links} to="/Plan-Your-Trip">Plan Your Trip</Link>
                    <Link className={styles.links} to="/Tour">Tour</Link>
                    <Link className={styles.links} to="/Make-a-Payment">Make a Payment</Link>
                    {/* <Link className={styles.links} to="/reviews">Reviews</Link> */}
                </div>
            </div>
            <div className={styles.barMenu} onClick={() => setNavbarOpen(!isOpen)}>
                {isOpen ? <FaTimes /> : <FaBars />}
            </div>
        </div>
    )
}

export default NavBar

