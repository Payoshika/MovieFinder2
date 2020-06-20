import React from "react";
import { Link } from "react-router-dom";

class Home extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      movieList: [],
      searchWord: ""
    }
    this.updateWord = this.updateWord.bind(this)
    this.fetchMovieList = this.fetchMovieList.bind(this)
  }

  updateWord = (event) => {
    const input = event.target.value;
    this.setState({
      searchWord: input
    })
  }

  fetchMovieList = (event) => {
    const searchWord = this.state.searchWord.toLowerCase().trim()
    fetch(`https://www.omdbapi.com/?s=${searchWord}&apikey=19cda37e`)
      .then((response) => {
        if(response.ok){
          return response.json()
        }
      })
      .then((data) => {
          if (data.Response === "True"){
            console.log(data.Search);
            this.setState({
              movieList: data.Search
            })
          }
          else{
            console.log(data.Error);
          }
        }
      )
  }

  render(){
    const {searchWord} = this.state;
    const movieListCopy = this.state.movieList.slice()
    const displayList = movieListCopy.map((movie)=> {
      let {Title, Year, imdbID, Poster} = movie;
      if(Poster === "N/A"){
        Poster = "https://via.placeholder.com/300x440?text=no+cover+photo+available"
      }
      return (
        <div key={imdbID} className="search-result-area col-12 col-sm-6 col-md-4 col-lg-3 d-flex flex-column align-items-center w-100 my-2">
          <div class="movie-title w-100 d-flex flex-column justify-content-end">
            <Link to={`/movie/${imdbID}`}>
              <h4 className="text-jutify">{Title}</h4>
              <p className="text-jutify">{Year}</p>
            </Link>
          </div>
          <Link to={`/movie/${imdbID}`}>
            <img src={Poster} alt={Title} className="img-fluid"/>
          </Link>
        </div>
      )
    })

    return(
        <div className="search-area container-fluid w-100">
          <div className="row w-100">
            <div className="col-12 form-group d-flex flex-row justify-cotent-center w-100">
              <input type="text" className="form-control-lg ml-auto mx-1" value={searchWord} onChange={this.updateWord}/>
              <button className="btn btn-primary mr-auto mx-1" onClick={this.fetchMovieList}>Search</button>
            </div>
          </div>
          <div className="row w-100">
            {displayList}
          </div>
        </div>
    )
  }
}

export default Home;
