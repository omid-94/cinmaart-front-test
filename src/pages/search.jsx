import styles from '../styles/Search.module.css'
import { Card , Pagination} from '../components/SubComponents' 
import { useEffect , useState} from 'react'
import JsonData from './api/data/SearchData.json'
import { useNavigate  , useSearchParams} from 'react-router-dom';

const Search = ({keyWord}) => {
  const navigate = useNavigate()
  const GoToDetails = (id) => navigate('/movies/' + id)
  const [keyword , SetKeyword] = useState(null) 
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    document.title = 'Cinama art | Search';
    SetKeyword(searchParams.get("keyword"))
  });
  return (
    <div className={styles.container}>
        { keyword ?      
          <div className={styles.head}>
              {"You searched for : " + keyword}
          </div> : null
        }
        <div className={styles.Grid_container}>
        {
            JsonData.map((item , index) => (
            <Card key={index}
                    title={item.title}
                    content={item.content}
                    url={item.url}
                    rate={item.rate}
                    likes={item.likes}
                    dislikes={item.dislikes}
                    onClick={() => GoToDetails(item.movieId)}
                    />
            )) 
        }
        </div>
        <Pagination/>
    </div>
  )
}

export default Search