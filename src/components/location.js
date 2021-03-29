import React from 'react';
import Card from 'react-bootstrap/Card'

class Location extends React.Component {
  render() {
    return (
      <Card className="w-50 p3 mx-auto mb-5" bg="dark" text="light">
        <Card.Title>{this.props.location.display_name}</Card.Title>
        <Card.Text>Latitude: {this.props.location.lat}</Card.Text>
        <Card.Text>Longitute: {this.props.location.lon}</Card.Text>
        <Card.Img src={this.props.imgSrc} />
      </Card>
    )
  }
}

export default Location;
