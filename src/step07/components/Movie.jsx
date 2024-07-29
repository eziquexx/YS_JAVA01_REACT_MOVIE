import './Movie.css';
import { Link } from 'react-router-dom';

function Movie({id, year, title, summary, poster, genres}) {
  return (
    <div className='movie'>
      <img src={poster} alt={title} />
      <div className='movie_data'>
        <h3 className='movie_title'>{title}</h3>
        <h5 className='movie_year'>{year}</h5>
        <p className='movie_summary'>{summary.slice(0, 180)}...</p>
        <ul className='movie_genre'>
          {
            genres.map((genre, index) => {
              <li key={index} className='movie_genre'>{genre}</li>
            })
          }

        </ul>
        
      </div>
    </div>
  );
}

export default Movie;