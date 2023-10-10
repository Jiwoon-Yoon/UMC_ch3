import Movie from "./Components/Movie";
import {movies} from "./movieDummy";

function App() {
  return (
    <div className="App">
      <div className="app-container">
        {
          movies.results.map((item)=>{
            return(
              <Movie 
                title={item.title}
                poster_path={item.poster_path}
                vote_average={item.vote_average}
              />
            )
          })
          //movie_Dummy에서 Movie로 정보 가져오는 코드.
        }

      </div>
    </div>
  );
}

export default App;
