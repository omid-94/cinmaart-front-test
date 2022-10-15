import React from 'react'
import {RiStarFill, RiThumbUpFill , RiThumbDownLine} from 'react-icons/ri'
import styles from '../../styles/components/subComponents/Rating.module.css'

const Rating = ({rate , likes , dislikes , size}) => {
  const starSize = size == 'large' ? 20 : 15;
  const fontSize = size == 'large' ? '10pt' : '8pt';
  return (
    <div className={styles.Container}>
        <div className={styles.Rate_Container}>
            <RiStarFill size={starSize} color={rate >= 1 ? "gold" : "grey"}/>
            <RiStarFill size={starSize} color={rate >= 2 ? "gold" : "grey"}/>
            <RiStarFill size={starSize} color={rate >= 3 ? "gold" : "grey"}/>
            <RiStarFill size={starSize} color={rate >= 4 ? "gold" : "grey"}/>
            <RiStarFill size={starSize} color={rate >= 5 ? "gold" : "grey"}/>
        </div>
        <div className={styles.Like_Container}>
            <RiThumbUpFill size={starSize} color="white"/>
            <span style={{'fontSize' : fontSize}}> {likes ? likes : "---"} </span>
            <RiThumbDownLine size={starSize} color="white"/>
            <span style={{'fontSize' : fontSize}}> {dislikes ? dislikes : "---"} </span>
        </div>
    </div>
  )
}

export default Rating