import React , {useEffect} from 'react'
import styles from '../styles/Form.module.css'

const SignIn = () => {
  useEffect(() => {
    document.title = 'Cinama art | Sign In';
  });
  return (
    <div className={styles.container}>
        <div className={styles.Form_container}>
            <h2>SignIn</h2>
            <form className={styles.Form} 
                  onSubmit={(e) => e.preventDefault()}>
                <label htmlFor="username">Username / Email</label>
                <input type="text" name="username" required/>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" required/>
                <button type="submit">Login</button>
            </form>
        </div>
    </div>
  )
}

export default SignIn