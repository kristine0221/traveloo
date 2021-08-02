import React from 'react'
import styles from './index.module.scss'

const TextField = (props) => {
    const { textLabel } = props;

    return (
        <div>
            <label className={styles.labelText}>{textLabel}</label>
            <input type='text' />
        </div>
    )
}

export default TextField
