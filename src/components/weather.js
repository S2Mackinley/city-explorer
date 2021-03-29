import React from 'react';
import WeatherDay from './weatherDay';

class Weather extends React.Component {
  render() {
    return (

<>
                {this.props.forecast.map(dayForecast => (
                  <WeatherDay dayForecast={dayForecast} />
                ))}
</>

    )
  }
}

export default Weather;

