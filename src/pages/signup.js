import React from 'react'
import styles from '../styles/Form.module.css'

const SignUp = () => {
  return (
    <div className={styles.container}>
        {/* <Head>
            <title>Cinamaart | SignUp</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head> */}
        <div className={styles.Form_container}>
            <h2>SignUp</h2>
            <form className={styles.Form}
                  onSubmit={(e) => e.preventDefault()} >
                <label htmlFor="username">Username *</label>
                <input type="text" name="username" required/>
                <label htmlFor="email">Email *</label>
                <input type="text" name="email" required/>
                <label htmlFor="phone">Phone Number</label>
                <input type="text" name="phone"/>
                <label htmlFor="password">Password *</label>
                <input type="password" name="password" required/>
                <label htmlFor="confirm">Confirm Password *</label>
                <input type="password" name="confirm" required/>
                <button type="submit">Register</button>
            </form>
        </div>
    </div>
  )
}

export default SignUp