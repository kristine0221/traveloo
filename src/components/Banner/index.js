import React from 'react'
//import NavBar from '/Navbar/index'

import * as styles from './index.module.scss'


const Banner = (props) => {
    const { details } = props;

    return (
        <>
            <div className={styles.bannerContainer}>
                <div className={styles.bannerContainerTexts} style={{ background: `url('/images/bannerbg.jpg')` }}>
                    <h1>{details.title}</h1>
                    <p>By: {details.author}</p>
                </div>
            </div>
        </>
    )
}


export default Banner

