import React from 'react'
import styles from '../../styles/components/subComponents/Card.module.css'
import Rating from './rating'
const Card = (props) => {
  return (
    <div className={styles.Card_container} onClick={props.onClick}>
        <div className={styles.Card_Header}>
            <p>{props.title}</p>
        </div>
        <div className={styles.Card_image}>
          <img 
              src={props.url}
          />
        </div>
        <div className={styles.Card_Content}>
            {props.content}
        </div>
        <div className={styles.Card_Actions}>
          {/* <Rating props/> */}
          <Rating rate={props.rate} likes={props.likes}  dislikes={props.dislikes}/>
        </div>
    </div>
  )
}

export default Card