import React from 'react';

import Movie from './movie';

class Movies extends React.Component {
  render() {
    return (

              <>
                {this.props.movies.map(movie => (
                  <Movie movie={movie} />
                ))}
              </>

    )
  }
}

export default Movies;
