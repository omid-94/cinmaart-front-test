import React from 'react'
import {RiStarFill, RiThumbUpFill , RiThumbDownLine} from 'react-icons/ri'
import styles from '../../styles/components/subComponents/Rating.module.css'

const Rating = ({rate , likes , dislikes}) => {
  return (
    <div className={styles.Container}>
        <div className={styles.Rate_Container}>
            <RiStarFill size={15} color={rate >= 1 ? "gold" : "grey"}/>
            <RiStarFill size={15} color={rate >= 2 ? "gold" : "grey"}/>
            <RiStarFill size={15} color={rate >= 3 ? "gold" : "grey"}/>
            <RiStarFill size={15} color={rate >= 4 ? "gold" : "grey"}/>
            <RiStarFill size={15} color={rate >= 5 ? "gold" : "grey"}/>
        </div>
        <div className={styles.Like_Container}>
            <RiThumbUpFill size={15} color="white"/>
            <span> {likes ? likes : "---"} </span>
            <RiThumbDownLine size={15} color="white"/>
            <span> {dislikes ? dislikes : "---"} </span>
        </div>
    </div>
  )
}

export default Rating