import React from 'react'
import styles from '../styles/Form.module.css'

const ContactUs = () => {
  return (
    <div className={styles.container}>
      {/* <Head>
        <title>Cinamaart | ContactUs</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head> */}
      <div className={styles.Form_container}>
        <h2>ContactUs</h2>
        <form className={styles.Form} 
              onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="name">Name *</label>
          <input type="text" name="name" required/>
          <label htmlFor="email">Email *</label>
          <input type="text" name="email" required/>
          <label htmlFor="phone">Phone Number</label>
          <input type="text" name="phone"/>
          <label htmlFor="text">Message *</label>
          <textarea type="text" name="text" rows={3} maxLength={200} required/>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default ContactUs