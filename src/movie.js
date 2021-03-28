import React from "react";
import MovieC from "./movie_child";
import Card from 'react-bootstrap/Card'
class Movie extends React.Component {
  addDefaultSrc(e) {
    e.target.src = "http://via.placeholder.com/300x450";
  }
  render() {
    let data = this.props.movie;


    return (
      <Card style={{alignSelf: "center", width: "100%",}}>
        {data.map((element, index) => (
          <MovieC
            key = {`id${Math.random().toString(16).slice(2)}`}
            title={element.title}
            released_on={element.released_on}
            img={element.image_url}
            description={element.overview}
            average_votes={element.average_votes}
            total_votes={element.total_votes}
            popularity={element.popularity}
          />
        ))}
      </Card>
    );
  }
}
export default Movie;
