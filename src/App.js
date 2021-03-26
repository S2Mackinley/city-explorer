import React from 'react';
import axios from 'axios';


import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ErrorMessage from './Error.js';
import Map from './map.js';

import Forecast from './forecast.js';
import Movie from './movie.js';


class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      location:{},
      weatherArray: [],
      moviesArray: [],
      searchQuery: '',
      imgSrc: '',
      displayResults: false,
      displayWeather:false,
      displayMovies:false,
    }
    // console.log('constructor');
  }

  getLocationInfo = async(e) => {
    e.preventDefault();

    try{
    const url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_KEY}&q=${this.state.searchQuery}&format=json`;
    const location = await axios.get(url);
    const locationArray = location.data;

    const weatherUrl = `http://localhost:3001/weather`;
    const weather = await axios.get(weatherUrl, {params: {city: this.state.searchQuery}});

    const moviesUrl = 'http://localhost:3001/movies';
    const movies = await axios.get(moviesUrl, {params: {movie_city: this.state.searchQuery}});

    this.setState({ 
      location: locationArray[0], 
      displayResults: true,
      imgSrc: `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATION_KEY}&center=${locationArray[0].lat},${locationArray[0].lon}&zoom=13`, 
      weatherArray: weather.data.forecast,
      moviesArray: movies.data,
      displayMovies: true,
      displayWeather: true
    });
  } catch(err) {
    console.log(err.message);
    this.setState({
      displayResults: false,
      displayMovies: false,
      displayWeather: false,
      hasError: true,
      errorMessage : err.message
    })
  }
}



  render() {
    return(
      <>
      <h1>Welcome!</h1>
        <Form  onSubmit={this.getLocationInfo}
          bg="secondary"
          text="light"
        >
          
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

            <Card style={{ width: '95%' }}
            bg="secondary"
            text="light"
            >
              <Map imageSrc={this.state.imgSrc} />
              {/* <Card.Img variant="top" src={this.state.imgSrc} alt='location'/> */}
              <Card.Body>
                <Card.Title>{this.state.location.display_name}</Card.Title>
                <Card.Text>Lattitude: {this.state.location.lat}</Card.Text> 
                <Card.Text>Longitute: {this.state.location.lon}</Card.Text> 
                <Forecast weather={this.state.weatherArray}/>    
                <Movie movie={this.state.moviesArray}/>          
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