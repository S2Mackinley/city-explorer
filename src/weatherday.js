import React from "react";
import Card from "react-bootstrap/Card";

class WeatherDay extends React.Component {
  render() {
    return (
      <div>
        <Card bg='primary' border="info" text='light'  style={{width:'10rem',height:'8rem',marginBottom:'0.3rem',opacity:'0.85'}}>
          <Card.Header>{this.props.date}</Card.Header>
          <Card.Body style={{opacity:'1'}}>
            <Card.Text style={{opacity:'1'}}>{this.props.desc}</Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
export default WeatherDay;
