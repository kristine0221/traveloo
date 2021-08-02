import React from 'react'
import styles from './index.module.scss'


const Button = (props) => {
    const { btnLabel } = props;

    return (
       
            <button className={styles.btnSubmit}>{btnLabel}</button>
            
       
    )
}

export default Button
