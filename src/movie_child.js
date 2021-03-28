import React from "react";
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'


class MovieC extends React.Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <CardGroup>
          <Card style={{display: "flex"}}>
          <Card.Title  style={{color: "white"}}><h2>{this.props.title}</h2></Card.Title>
            <Card.Img src={this.props.img} alt={this.props.title}/>
            <Card.Text>Released on: {this.props.released_on}</Card.Text>
            <Card.Text style={{textAlign: "center"}}>{this.props.description}</Card.Text>
            </Card>
          </CardGroup>
      </div>
    );
  }
}
export default MovieC;
