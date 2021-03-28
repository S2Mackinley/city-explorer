import React from "react";
import CardDeck from "react-bootstrap/CardDeck";
import WeatherDay from "./weatherday";

class Weather extends React.Component {
  render() {
    let data = this.props.weather;
    // console.log(this.props.weather.forecast)
    return (
      <CardDeck style={{alignSelf:"center"}}>
        {data.map((element) => (
          <WeatherDay key={element.time} date={element.time} desc={element.forecast} />
        ))}
      </CardDeck>
    );
  }
}
export default Weather;
