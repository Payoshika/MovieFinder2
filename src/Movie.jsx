import React from "react"

class Movie extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      movieInfo: null
    }
  }

componentDidMount(){
  fetch(`https://www.omdbapi.com/?i=${this.props.match.params.id}&plot=full&apikey=19cda37e`)
    .then((response)=>{
      if(response.ok){
        return response.json()
      }
    })
    .then((data)=>{
      if(data.Response === "True") {
        this.setState({
          movieInfo: data
        })
      }
      else {
        throw new Error(data.Error);
      }
    })
    .catch((error) => {
    this.setState({ error: error.message });
    console.log(error);
    })
}

  render(){
    if (!this.state.movieInfo) {
      return null;
    }
    let {Title, Actors, Director, Genre, Released, imdbRating, Plot, Poster} = this.state.movieInfo;

    if(Poster === "N/A"){
      Poster = "https://via.placeholder.com/300x440?text=no+cover+photo+available"
    }

    return (
      <div className="container-fluid w-100">
        <div className="row w-100">
          <div className="col-12 head-info d-flex flex-column justify-content-center align-items-center">
            <h2 className="text-center my-4">{Title}</h2>
            <p>Genre:{Genre}</p>
          </div>
          <div className="col-12 col-md-6 d-flex justify-content-center">
            <div className="img-info my-2">
              <img src={Poster} alt={Title}/>
            </div>
          </div>
          <div className="foot-info col-12 col-md-6">
            <p>Released:{Released}</p>
            <p>Actor:{Actors}</p>
            <p>Director:{Director}</p>
            <p>Story:{Plot}</p>
            <p>Rating:{imdbRating}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Movie;
