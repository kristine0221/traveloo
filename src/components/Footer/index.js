import React from 'react'

import * as styles from './index.module.scss'

const Footer = () => {
    return (
        <div className={styles.footerContainer}>
            <div className={styles.columnContainer}
>            <div className={styles.column}>
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
        </div>
    )
}


export default Footer

