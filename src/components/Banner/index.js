import React from 'react'
//import NavBar from '/Navbar/index'

import * as styles from './index.module.scss'


const Banner = (props) => {
    const { details } = props;

    return (
        <>
            <div className={styles.bannerContainer}>
                {/* <div className={styles.bannerImage}></div> */}
                <img className={styles.bannerImage} src={details.image} />
                {/* <div className={styles.bannerContainerTexts} style={{ background: `url('/images/bannerbg.jpg')` }}> */}
                <div className={styles.bannerContainerTexts}>                   
                    <h1>{details.title}</h1>
                    <p>By: {details.author}</p>
                </div>
            </div>
        </>
    )
}


export default Banner

