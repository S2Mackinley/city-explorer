import React from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card'
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ErrorMessage from './Error.js';
import Map from './map.js';
import Forecast from './forecast.js';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      location:{},
      searchQuery: '',
      imgSrc: '',
      displayResults: false,
      weatherArray: [],
    }
    // console.log('constructor');
  }

  getLocationInfo = async(e) => {
    e.preventDefault();
    try{
    console.log(this.state.searchQuery);
    const url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_KEY}&q=${this.state.searchQuery}&format=json`;
    console.log(url);
    const location = await axios.get(url);
    const locationArray = location.data;
    const weatherUrl = `http://localhost:3001/weather`;
    const weather = await axios.get(weatherUrl, {params: {city: this.state.searchQuery}});
    console.log(locationArray);
    console.log('stuff', weather);
    this.setState({ 
      location: locationArray[0], 
      displayResults: true,
      imgSrc: `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATION_KEY}&center=${locationArray[0].lat},${locationArray[0].lon}&zoom=13`, 
      weatherArray: weather.data.forecast
      
    });
  } catch(err) {
    console.log(err.message);
    this.setState({
      displayResults: false,
      hasError: true,
      errorMessage : err.message
    })
  }
}



  render() {
    console.log('state', this.state)
    return(
      <>
        <Form  onSubmit={this.getLocationInfo}
          bg="secondary"
          text="light"
        >
          <h1>Welcome!</h1>
          <input onChange={(e) => this.setState({ searchQuery: e.target.value })}  placeholder="type a city..."/>
          &nbsp;&nbsp;
          <Button 
          type="submit"
          variant="dark"
          size="sm"
          > explore!</Button>
        </Form>
        <br/>
        {this.state.displayResults &&

            <Card style={{ width: '35rem' }}
            bg="secondary"
            text="light"
            >
              <Map imageSrc={this.state.imgSrc} />
              {/* <Card.Img variant="top" src={this.state.imgSrc} alt='location'/> */}
              <Card.Body>
                <Card.Title>{this.state.location.display_name}</Card.Title>
                <Card.Text>
                Lattitude: {this.state.location.lat}
                </Card.Text> 
                <Card.Text>
                Longitute: {this.state.location.lon}
                </Card.Text> 
                <Forecast weather={this.state.weatherArray}/>              
              </Card.Body>
          </Card>
        }
          {this.state.hasError && 

          <div>
            <ErrorMessage />
            <h3> {this.state.errorMessage} </h3>
          </div>
          }
      </>
    )
  }
}

export default App;