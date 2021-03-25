import React from 'react';


class Forecast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weatherForecast: []
    }
  }



  forecastRender(){
    const data = this.props.weather;
    return <ul>{data.map((item, index) => <li key={index}>{item.date}: {item.description}</li>)}</ul>
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