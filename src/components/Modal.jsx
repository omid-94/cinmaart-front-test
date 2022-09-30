import React , {useState, useEffect} from 'react'
import styles from '../styles/components/Modal.module.css'

const Modal = (props) => {
    const [IsShow , setIsShow] = useState(false);
    useEffect(() => {
        setIsVisible(props.IsShow)
    }, [])
  return (
    <>
        {IsShow && (
        <div className={styles.Modal}>
            <div className={styles.Modal_content}>
                {props.children}
            </div>
        </div> 
    )}
    </>
  )
}

export default Modal