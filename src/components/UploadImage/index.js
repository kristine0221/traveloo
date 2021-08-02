import React from 'react'
import { AiOutlineCloudUpload } from '@react-icons/all-files/ai/AiOutlineCloudUpload'
import styles from './index.module.scss'

const UploadImage = (props) => {
    const {uploadImage} = props
    return (
        <div>
            <label className={styles.labelText}>Upload Image</label>
            <button className={styles.btnUpload}><AiOutlineCloudUpload className={styles.uploadLogo} />{uploadImage}</button>
        </div>
    )
}

export default UploadImage
 