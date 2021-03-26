import React from 'react';


class Movie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    }
  }


  moviesRender(){
    const data = this.props.movie;
    return <ul>{data.map((movie, index) => 
        <div key={index}>
        <img src={movie.image_url} alt={movie.title}></img>
        <h2>{movie.title}</h2>
        <p>{movie.overview}</p>
        <h4>Release Date: {movie.released_on}</h4>
        <h4>Popularity Score: {movie.popularity}</h4>
        <h4>Total Votes: {movie.total_votes}</h4>
        <h4>Avg Score per Vote: {movie.average_votes}</h4>
        </div>
      )}
      </ul>
   
    
  }

  render() {
    return (
      <>
        <h2>Movies</h2>
        
        {this.moviesRender()}
      </>
    )
  }
}

export default Movie;