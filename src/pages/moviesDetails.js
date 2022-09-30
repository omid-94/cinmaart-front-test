import React  from 'react'
import { useParams } from 'react-router-dom'
import styles from '../styles/MoviesDetails.module.css'
import detailsData from './api/data/detailsData.json'
import {BaseTable , Pagination} from '../components/SubComponents'

const MoviesDetails = (props) => {
    const { id } = useParams();
    console.log("Movie Details Id",id)
    const selectedItem =  detailsData.find((obj) => {
      return obj.movieId == id;
    })
    const tableHeader = [
      {
        title : "File Name",
        key : "fileName"
      },
      {
        title : "Author",
        key : "author"
      },
      {
        title : "Link",
        key : "link"
      }
    ];
    return (
      <div className={styles.container}>
        {selectedItem ?
          <div className={styles.moviesDetail}>
            <div className={styles.moviesDetail_Banner}>
            <img 
                src={selectedItem.url}
            />
            </div>
            <div className={styles.moviesDetail_Description}>
              <div >
                <h2>{selectedItem.title}</h2>
                <p>{selectedItem.content}</p>
              </div>
              <div>
                <BaseTable 
                  Header={tableHeader}
                  Data={selectedItem.subtitles}
                />
              </div>
              <div>
                <Pagination/>
              </div>
            </div>  
          </div>
        : <h2> 204 | Item Not Found </h2> 
      }
      </div>
    )
}

export default MoviesDetails