import { Link } from 'react-router-dom';
import './Movie.css';


function Movie({id, title, year, poster, summary, genres}) {
  
  
  return (
    
    // movie를 어떤 방식으로 보여줄 것인가.
    // movie poster, title, year summary, genres (포스터, 제목, 연도, 소개, 장르) 
    <Link to={`/detail?id=${id}`} className='movieWrap'>
      <div className="movie">
        <div className='moviePoster'>
          <img src={poster}></img>
        </div>
        <div className='movieDataWrap'>
          <div className='movieTitle'>
            {title}
            <span className='movieYear'>{year}</span>
          </div>
          <div className='movieSummary'>{summary.slice(0, 250)}...</div>
          <div className='movieGenres'>
            { genres.map((genre, idx) => {
              return (
                <span key={idx}>{genre}</span>
              );
            }) }
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Movie;