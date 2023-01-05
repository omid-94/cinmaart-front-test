import React from 'react'
import styles from  '../../styles/components/subComponents/ProfileCard.module.css'

const ProfileCard = (props) => {

    const ShowDetails  = (e) => {
        window.open('https://adrinsoft.ir/resume/user/' + props.UserId, '_blank');
    }
  return (
    <div className={styles.Card_container}>
        <div className={styles.Avatar}>
            <div className={styles.Image_container}>
                <img src={props.ImageSource} alt={props.Name} className={styles.Image}/>
            </div>
        </div>
        <div className={styles.Profile_Name}>
            <h2>{props.Name}</h2>
        </div>
        <div className={styles.Details}>
            <h4>{props.Title}</h4>
        </div>       
        <div className={styles.Details}>
            <h5><i>{props.Company}</i></h5>
        </div>
        <div className={styles.ShowMore}>
            <button onClick={ShowDetails} className={styles.BtnShowMore}>Show Details</button>
        </div>
    </div>
  )
}

export default ProfileCard