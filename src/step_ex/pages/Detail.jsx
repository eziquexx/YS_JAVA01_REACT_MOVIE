// Detail화면에는 movie의 자료를 화면에 보여줄 것이다.
// useState, useEffect 훅을 사용.
import './Detail.css';
import { useState, useEffect } from "react";
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';

function Detail() {
  const [isLoading, setIsLoading] = useState(true);
  const [movieInfo, setMovieInfo] = useState(null);
  const [error, setError] = useState(null);

  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get('id');

  const fetchMovies = async () => {

    try {
      const response = await axios.get(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`);

      console.log(response);
      setMovieInfo(response.data.data.movie);
      setIsLoading(false);
    }
    catch(err) {
      setError(err);
    }

  }

  useEffect(() => {
    fetchMovies();
  }, [isLoading]);

  if(error) {
    return (
      <div>Error: {error.message}</div>
    );
  }


  return (

    isLoading ? (
      <div className='errorMsg'>
        
      </div>
    ) : (
      <div className='movieDetailWrap'>
          <h1>{movieInfo.title}</h1>
          <div className='movieDetail'>
            <img className='moviePoster' src={movieInfo.medium_cover_image} alt={movieInfo.title} />
            <div className='movieTitle'>{movieInfo.title}</div>
            <div className='year_Rate_runtime'>
              <div className='movieYear'>{movieInfo.year}&nbsp;&#124;&nbsp;</div>
              <div className='movieRating'>Rating: {movieInfo.rating}&nbsp;&#124;&nbsp;</div>
              <div className='movieRating'>Runtime: {movieInfo.runtime}min</div>
            </div>
            <div className='movieGenres'>
              {
                movieInfo.genres.map((info, idx) => {
                  return (
                    <span key={idx}>{info}</span>
                  );
                })
              }
            </div>
            <div className='movieDes'>{movieInfo.description_intro}</div>
          </div>
      </div>
    )
  );
}

export default Detail;