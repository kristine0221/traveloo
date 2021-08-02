import React, { useState } from 'react'

import DatePicker from 'react-datepicker'
//import StarRatings from 'react-star-ratings'
import { FaRegStar } from "@react-icons/all-files/fa/FaRegStar";
import { FaStar } from "@react-icons/all-files/fa/FaStar";
// import { AiOutlineCloudUpload } from '@react-icons/all-files/ai/AiOutlineCloudUpload'

import * as styles from './index.module.scss'
import "react-datepicker/dist/react-datepicker.css";
import Button from "../../components/Button"
import UploadImage from "../../components/UploadImage"
import TextField from "../../components/TextField"
import TextArea from "../../components/TextArea"

const Reviews = () => {

    const [starRating, setStarRating] = useState(0);

    const onStarRatingClick = (newStarRating) => {
        setStarRating(newStarRating);
    }


    const getStarRating = (starRatingParam) => {
        let ratings = [];
        const starNum = 5;
        for (let i = 0; i < starNum; i++) {
            const startInit = i + 1;
            ratings.push(startInit <= starRatingParam ? <FaStar className={styles.star} onClick={() => onStarRatingClick(startInit)} /> : <FaRegStar className={styles.star} onClick={() => onStarRatingClick(startInit)} />)
        }
        return ratings;
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();
        console.log("submitted")
    }

    return (
        <div className={styles.reviewsContainer} >
            <div className={styles.reviewsWrapper}>
                <form className={styles.reviewsForm} onSubmit={handleOnSubmit}>
                    <div className={styles.row}>
                        <label className={styles.labelText}>Rate Your Experience</label>
                        <div className={styles.starRatingWrapper}>
                            {getStarRating(starRating)}</div>

                    </div>
                    <div className={styles.row}>
                        {/* <label className={styles.labelText}>What's your experience?</label>
                        <textarea></textarea> */}
                        <TextArea inputTextArea={"What's your experience?"}/>

                    </div>
                    <div className={styles.row}>
                        {/* <label className={styles.labelText}>Give it a title</label>
                        <input type='text' /> */}
                        <TextField textLabel={"Give it a title"} />

                    </div>
                    <div className={styles.row}>
                        <label className={styles.labelText}>When was your tour?</label>

                        <div className={styles.datePicker}> <DatePicker calendarClassName={`fa-calendar-alt ${styles.datePicker}`} placeholderText="dd/mm/yy" /></div>
                    </div>
                    <div className={styles.row}>
                        {/* <label className={styles.labelText}>Type of tour</label> */}
                        {/* <input type='text' /> */}
                        <TextField textLabel={"Type of Tour"} />
                    </div>
                    <div className={styles.row}>
                        {/* <label className={styles.labelText}>Upload Image</label>
                        <button className={styles.btnUpload}><AiOutlineCloudUpload className={styles.uploadLogo} /></button> */}
                        <UploadImage/>
                    </div>
                    <p>establishment, and have not been offered any incentive or payment originating from the establishment to write this review. I understand that Tripadvisor has a zero tolerance policy on fake reviews.</p>
                    <div className={styles.row}>
                        {/* <button className={styles.btnSubmit} type='submit' >Submit your review</button> */}
                        <Button btnLabel={"Submit your review"} />
                    </div>
                </form>
            </div>
        </div>

    )
}

export default Reviews

