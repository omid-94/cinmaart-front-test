import React from 'react'
import styles from '../styles/Aboutus.module.css'
import { ProfileCard } from '../components/SubComponents'
import omidPic from '../assets/omidProfile.jpg'
import essiPic from '../assets/essiProfile.jpg'

const About = () => {
  return (
    <div className={styles.container}>
      {/* <Head>
        <title>Cinamaart | AboutUs</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head> */}
      <h1>About Us</h1>
      <div className={styles.line}/>
      <div className={styles.card_container}>
        <ProfileCard 
              ImageSource={omidPic} 
              Name="Omid Dadvar"
              Title="Software Developer"     
              Company="Tazarv Afzar Company" 
              UserId={2}
        />
        <ProfileCard 
              ImageSource={essiPic} 
              Name="Nima Esfahani"
              Title="Software Developer" 
              Company="Freelancer"
              UserId={1}
        />
      </div>
    </div>
  )
}

export default About