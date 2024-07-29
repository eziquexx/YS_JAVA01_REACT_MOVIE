// Home 목록페이지
//npm install axios
// 목록주소
// https://yts.mx/api/v2/list_movies.json
// https://yts-proxy.now.sh/list_movies.json
// 상세보기주소
// https://yts.mx/api/v2/movie_details.json?movie_id=11
// https://yts-proxy.now.sh/movie_detail.json?movie_id=11

import './Home.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Movie from '../components/Movie';

function Home() {
  // 상태변수를 설정
  const [isLoading, setIsLoading] = useState(true);
  const [loadCounter, setLoadCounter] = useState(0);
  const [movies, setMovies] = useState(null);

  // sync: 동기
  // async: 비동기
  // await 사용하여 axios.get 호출의 결과를 기다린다.
  // awiat 키워드는 비동기 작업의 결과를 기다리면서 코드의 가독성을 높이고, 예외 처리를 단순화하는데 사용된다.
  const fetchMovies = async () => {
    console.log('fetchMovies 호출')
    const response = await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating');
    console.log(response.data.data.movies);
    setMovies(response.data.data.movies);
    setIsLoading(false);
  }

  function displayMovies() {

      return (
        <div>
          <h1>Movie List</h1>
          <ul className='movies'>
            {
              movies.map((item) => {
                return (
                  <Movie 
                    key={item.id}
                    title = {item.title}
                    id = {item.id}
                    year = {item.year}
                    summary = {item.summary}
                    poster = {item.medium_cover_image}
                    genres = {item.genres}
                  />
                );
              })
            }
          </ul>
        </div>
      );
  }


  useEffect(() => {
    console.log('useEffect 발생');
    fetchMovies();
   
  }, [loadCounter]);

  return (
    <div>
      {isLoading ? `Loading... ${loadCounter}` : displayMovies() }
    </div>
  );
}

export default Home;
