import styles from '../styles/Home.module.css'
import { useEffect, useState } from 'react'
import { Card } from '../components/SubComponents' 
import JsonData from './api/data/homeData.json'
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate()
  const GoToDetails = (id) => navigate('/movies/' + id)
  useEffect(() => {
    document.title = 'Cinama art | Home';
  });
  
  return (
    <div className={styles.container}>
      <div className={styles.Grid_header}>
        Latest movies in the world
      </div>
      <div className={styles.Grid_container}>
      {
            JsonData.latest.map((item , index) => (
              <Card key={index}
                    title={item.title}
                    content={item.content}
                    url={item.url}
                    onClick={() => GoToDetails(item.movieId)}
              />
            )) 
        }
      </div>
      <div className={styles.Grid_header}>
        The most popular movies in the world
      </div>
      <div className={styles.Grid_container}>
      {
            JsonData.popular.map((item , index) => (
              <Card key={index}
                    title={item.title}
                    content={item.content}
                    url={item.url}
                    onClick={() => GoToDetails(item.movieId)}
              />
            )) 
        }
      </div>
    </div>
  )
}
