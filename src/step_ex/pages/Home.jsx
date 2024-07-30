// home page를 꾸며줄 css파일
// 각각의 값들으 담을 useState
// 어떠한 이벤트를 실행시키기 위한 useEffect
// json 데이터 값을 받아올 자바스크립트 라이브러리 axios
// 화면에 뿌려줄 movie 컴포넌트
// 목록주소
// https://yts.mx/api/v2/list_movies.json
// https://yts-proxy.now.sh/list_movies.json
// 상세보기주소
// https://yts.mx/api/v2/movie_details.json?movie_id=11
// https://yts-proxy.now.sh/movie_detail.json?movie_id=11

import './Home.css'
import { useState, useEffect } from 'react';
import axios from 'axios';
import Movie from '../components/Movie';


function Home() {

  // useState 사용해서 로딩의 값을 담을 상태변수 만들기. boolean 값으로. 초기값은 true
  // loadCounter의 값을 담을 상태변수 만들기. number 값으로. 초기값은 0.
  // movie의 정보를 담을 상태변수 만들기. 초기화값은 임의로 null. 나중에 객체형태의 값을 담을 것이다.
  const [isLoading, setIsLoading] = useState(true);
  const [loadCounter, setIsCounter] = useState(0);
  const [movies, setMovies] = useState(null);
  // 영화 정보 불러오는 실행문 만들기.
  // async 사용해서 함수를 비동기 함수로 만들기.
  const fetchMovies = async () => {

    // axios.get() 으로 정보 가져와서 변수에 담기.
    // await 키워드를 사용 안 하고 console.log 하면 오류가 일어난다.
    // 그렇기 때문에 await 키워드를 꼭 사용해서 비동기를 잠깐 동기로 만들자.
    // 즉, axios.get으로 가져오는 정보를 다 불러오기 전까지 다음 코드로 진행을 안 하는 거다.
    // 'sort_by=rating'은 URL의 쿼리 파라미터로,
    // 서버에 데이터를 요청할 때 특정 기준으로 정렬된 데이터를 받기 위해 사용된다.
    // rating은 영화의 평점을 의미하며, 영화 데이터 평점 순으로 정렬하여 반환해 달라는 요청을 보내는 것이다.
    const response = await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating');
    // console.log해보면 data > data > movies 안에 영화들의 정보가 담겨져 있다.
    console.log(response.data.data.movies);
    // respnse.data.data.movies의 값들을 상태변수 Movies로 전달해주자.
    setMovies(response.data.data.movies);
    setIsLoading(false);
  }
  // useEffect를 사용하여 fetchMovies 실행
  // 맨 처음 렌더링 되었을 때 fetchMovies 실행.
  // loadCounter의 값이 변경될때 fetchMovies 실행.
  useEffect(() => {
    fetchMovies();
  },[loadCounter]);
  

  // isLoading이 true면 Loading이 진행되며 loadCounter가 올라간다.
  // isLoading이 false면 <Movie/>들을 화면에 출력해준다.
  // movie들을 .map() 함수를 사용하여 만들어보자.
  // moive들은 moviesView라는 함수 안에 콜백함수로, .map()함수로 만들자.

  const movieView = () => {
    
    return (
      <div>
        {
          movies.map((movie, idx) => {
            
            return (
              <Movie
                key={movie.id}
                id={movie.id}
                title={movie.title}
                year={movie.year}
                summary={movie.summary}
                genres={movie.genres} 
                poster={movie.medium_cover_image}
              />
            );
          })
        }
      </div>
    );
  }
  
  return (
    <div className='homeWrap'>
      <h1>Home page</h1>
      <div className='movieCotainer'>
        {
          isLoading ? `Loading... ${loadCounter}` : movieView()
        }
      </div>
    </div>
  );
}

export default Home;