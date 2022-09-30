import React from 'react'
import styles from '../styles/components/Footer.module.css'

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footer_links}>
        <div className={styles.footer_links_logo}>
          {/* <img src={gpt3Logo} alt="logo" /> */}
          <p>Kaboli St, Seyyed khandan Brdg, Tehran, Iran <br /> All Rights Reserved</p>
        </div>
        <div className={styles.footer_links_div}>
          <h4>Links</h4>
          <p>Telegram</p>
          <p>Instagram</p>
          <p>Adrinsoft</p>
        </div>
        <div className={styles.footer_links_div}>
          <h4>Company</h4>
          
          <p>Terms &amp; Conditions </p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className={styles.footer_links_div}>
          <h4>Get in touch</h4>
          <p>+98-21-88463646</p>
          <p>info@cinamaart.ir</p>
          <p>t.me/cinamaart-support</p>
        </div>
      </div>

    <div className={styles.footer_copyright}>
      <p>@2022 cinamaart All rights reserved.</p>
    </div>
  </div>
  )
}

export default Footer
