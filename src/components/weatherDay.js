import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';

class WeatherDay extends React.Component {
  render() {
    return (
      <Card>
        <Card.Header>Today's Forecast</Card.Header>
        <CardGroup>{this.props.dayForecast.date}</CardGroup> 
        <CardGroup>{this.props.dayForecast.description}</CardGroup>
        <CardGroup>Todays High: {this.props.dayForecast.high}°F</CardGroup>
        <CardGroup>Todays Low: {this.props.dayForecast.low}°F</CardGroup>
        </Card>
    )
  }
}

export default WeatherDay;

