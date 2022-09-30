import React from 'react'
import styles from '../../styles/components/subComponents/BaseTable.module.css'
import { Link } from 'react-router-dom';

const BaseTable = (props) => {
  try{

  return (
    <div className={styles.Container}>
        <table>
          <thead>
            <tr>
              {props.Header.map((headerItem , index) => {
                return <th key={index}>{headerItem.title}</th>
              })}
            </tr>
          </thead>
          <tbody>
            {props.Data.map((item , i) => {
              return <tr key={i}>
                      {props.Header.map((headerItem , j) => {
                        const keyName = props.Header[j].key
                        return <td key={j}>
                                {keyName == "link" 
                                    ? <Link to={item[keyName]}>
                                        {"Download"}
                                      </Link> 
                                    :item[keyName]}
                              </td>
                      })}
                     </tr>
            })}
          </tbody>
        </table>
    </div>
    
  )
}catch (ex){
    return <h6>{"Failed to load table..."}</h6>
}
}

export default BaseTable