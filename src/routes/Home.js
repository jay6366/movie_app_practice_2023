import React from 'react';
import axios from 'axios';
import Movie from '../components/Movie';
import './Home.css';

class Home extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };

  // getMovies = async () => {
  //   const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json");
  //   console.log(movies.data.data.movies);
  // }

  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating');
    this.setState({ movies, isLoading: false });
    // this.setState()는 객체를 인자로 받아, 해당 객체로 컴포넌트의 state를 부분적으로 업데이트할 수 있습니다.
  }

  componentDidMount(){
    //영화 데이터 로딩!
    // setTimeout(()=>{
    //   this.setState( {isLoading: false} );
    // }, 6000);
   this.getMovies();
    //axios로 api호출
  }

  render(){
    const { isLoading, movies } = this.state;
    //this.state 객체에서 isLoading과 movies라는 속성을 추출하여 각각의 상수로 선언하는 작업
    //이렇게 구조 분해 할당 문법을 사용하면 복잡한 객체나 배열에서 원하는 값을 쉽게 추출할 수 있으며, 
    //코드를 더 깔끔하고 가독성 좋게 만들 수 있습니다.
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ) : (
          <div className="movies">
            {movies.map(movie => (
              <Movie
                key = {movie.id} 
                id = {movie.id}
                year = {movie.year}
                title = {movie.title}
                summary = {movie.summary}
                poster = {movie.medium_cover_image}
                genres = {movie.genres}
              />
            ))}
          </div>
        )}
      </section>
    );
            }
          }
            

  

export default Home;

