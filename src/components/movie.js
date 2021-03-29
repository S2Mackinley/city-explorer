import React from 'react';
import { Card } from 'react-bootstrap';

class Movie extends React.Component {
  render() {
    return (
      <Card>
        <Card.Header>Movie: {this.props.movie.title}</Card.Header>
        <Card.Img src={this.props.movie.image_url}></Card.Img>
        <Card.Text>Average Score: {this.props.movie.average_votes}</Card.Text>
        <Card.Text>Total Amount Of Votes: {this.props.movie.total_votes}</Card.Text>
        <Card.Text>Popularity: {this.props.movie.popularity}</Card.Text>
        <Card.Text>Released On: {this.props.movie.released_on}</Card.Text>
        <Card.Text>{this.props.movie.description}</Card.Text>
      </Card>
    )
  }
}

export default Movie;
