import React from 'react';
import axios from 'axios';

class Forecast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weatherForecast: []
    }
  }

  componentDidMount = async () => {
    const SERVER = 'http://localhost:3001';
    const forecast = await axios.get(`${SERVER}/weather`);
    const forecastArray = forecast.data;
    console.log({ forecastArray });
    this.setState({ weatherForecast: forecastArray.forecast });
  }

  forecastRender(){
    const data = this.state.weatherForecast;
    return <ul>{data.map(item => <li>{item.date}: {item.description}</li>)}</ul>
  }

  render() {
    return (
      <>
        <h2>Weather</h2>
        {this.forecastRender()}
      </>
    )
  }
}

export default Forecast;