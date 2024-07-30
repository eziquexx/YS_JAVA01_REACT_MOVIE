import './Detail.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';


function Detail() {
  const [isLoading, setIsLoading] = useState(true);
  const [info, setInfo] = useState(null);
  const [error, setError] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  // id값 구하기
  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get('id');
  // 

  const fetchMovies = async () => {
    try{
      console.log('fetchMovies 호출');
      const response = await axios.get(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`);
      console.log(response);
      setInfo(response.data.data.movie);
      setIsLoading(false);
    } catch(err){
      setError(err);
    }
  }

  useEffect(() => {
    console.log('useEffect발생');
    fetchMovies();
  },[info]);

  if(error) {
    return (
      <div>Error: {error.message} </div>
    );
  }

  return (
    <div className='detail'>
      {isLoading? (
        <div className='loader'>
          <span className='loader_text'>Loading...</span>
        </div>
      ) : (
        <>
          <img src={info.medium_cover_image}/>
          <h2>{info.title}({info.year})</h2>
          <p>{info.description_full}</p>
          <ul>
            {
              info.genres.map((item, index) => {
                return(
                  <li key={index}>{item}</li>
                )
              })
            }
          </ul>
        </>
      )}

    </div>
  );
}

export default Detail;