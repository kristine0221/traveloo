import React from 'react'
import { Link } from 'react-router-dom';

import * as styles from './index.module.scss'

const NavBar = () => {
    return (
        <div className={styles.navbarContainer}>
            <div className={styles.navbarWrapper}>
                <Link className={styles.links} to="/">About Us</Link>
                <Link className={styles.links} to="/">How it Works</Link>
                <Link className={styles.links} to="/">Plan Your Trip</Link>
                <Link className={styles.links} to="/">Tour</Link>
                <Link className={styles.links} to="/">Make a Payment</Link>
            </div>
        </div>
    )
}

export default NavBar

