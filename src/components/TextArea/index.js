import React from 'react'

import styles from './index.module.scss'

const TextArea = (props) => {
    const { inputTextArea } = props
    return (
        <div>
            <label className={styles.labelText}>{inputTextArea}</label>
            <textarea></textarea>
        </div>
    )
}

export default TextArea
