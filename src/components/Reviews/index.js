import React, { useState } from 'react'

import DatePicker from 'react-datepicker'
//import StarRatings from 'react-star-ratings'
import { FaRegStar } from "@react-icons/all-files/fa/FaRegStar";
import { FaStar } from "@react-icons/all-files/fa/FaStar";
import { AiOutlineCloudUpload } from '@react-icons/all-files/ai/AiOutlineCloudUpload'

import * as styles from './index.module.scss'
import "react-datepicker/dist/react-datepicker.css";


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




    return (
        <div className={styles.reviewsContainer} >
            <div className={styles.reviewsWrapper}>
                <form className="reviewsForm">
                    <div className={styles.row}>
                        <label>Rate Your Experience</label>
                        <div className={styles.starRatingWrapper}>
                            {getStarRating(starRating)}</div>

                    </div>
                    <div className={styles.row}>
                        <label>What's your experience?</label>
                        <textarea></textarea>

                    </div>
                    <div className={styles.row}>
                        <label>Give it a title</label>
                        <input type='text' />

                    </div>
                    <div className={styles.row}>
                        <label>When was your tour?</label>

                        <div className={styles.datePicker}> <DatePicker calendarClassName={`fa-calendar-alt ${styles.datePicker}`} placeholderText="dd/mm/yy" /></div>
                    </div>
                    <div className={styles.row}>
                        <label>Type of tour</label>
                        <input type='text' />

                    </div>
                    <div className={styles.row}>
                        <label>Upload Image</label>
                        <button><AiOutlineCloudUpload /></button>

                    </div>
                    <p>establishment, and have not been offered any incentive or payment originating from the establishment to write this review. I understand that Tripadvisor has a zero tolerance policy on fake reviews.</p>
                    <div className={styles.row}>
                        <input type='submit' value='Submit your review' />
                    </div>
                </form>
            </div>
        </div>

    )
}

export default Reviews

