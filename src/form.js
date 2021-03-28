import React from "react";
import axios from "axios";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Card from 'react-bootstrap/Card'

import Weather from "./weather";
import Movie from "./movie";

class FormInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: {},
      searchQuery: "",
      imgSrc: "",
      displayResults: false,
      weatherArray: [],
      movieArray: [],
    };
  }

  getLocationInfo = async (e) => {
    try {
      e.preventDefault();
      const url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_KEY}&q=${this.state.searchQuery}&format=json`;
      const location = await axios.get(url);
      const locationArray = location.data;

      this.getWeatherInfo(locationArray[0]);
      this.getMovieInfo(locationArray[1]);

      this.setState({
        location: locationArray[0],
        displayResults: true,
        imgSrc: `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATION_KEY}&center=${locationArray[0].lat},${locationArray[0].lon}&zoom=12`,
      });
      // console.log("state", locationArray[0]);
    } catch (err) {
      if (!alert(err)) {
        window.location.reload();
      }
    }
  };

  getWeatherInfo = async (location) => {
    try {
      const weather = await axios.get(`http://localhost:3001/weather`,
        {
          params: { lat: location.lat, lon: location.lon },
        }
      );
      this.setState({ weatherArray: weather.data });
      console.log("inside getWeatherInfo", weather);
    } catch (err) {
      console.log(err);
    }
  };

  getMovieInfo = async (location) => {
      const SERVER = process.env.REACT_APP_SERVER;
      axios.get(`${SERVER}/movies?location=${location}`)
      .then(movie => {
        this.setState({ movieArray: movie.data });
      })
      .catch(err => {
        console.log(err.message);
        this.setState({ displayErrorModal: true, errorMessage: err.message })
      })
  };
  // const movie = await axios.get(`http://localhost:3001/movies`,);

  // const movie = await axios.get(movie_url);
  render() {
    return (
      <div className="body">
        <Form onSubmit={this.getLocationInfo} style={{ marginTop: "2rem" }}>
          <Form.Row>
            <input
              onChange={(e) => this.setState({ searchQuery: e.target.value })}
              placeholder="type in a city..."
            />
            <Col>
              <Button variant="primary" type="submit">
                explore!
              </Button>
            </Col>
          </Form.Row>
        </Form>


        <div style={{ marginTop: "2rem" }}>
          {this.state.displayResults && (
            <>
              <div>
              <h2 style={{ color: "white"}}>
                {this.state.location.display_name}
              </h2>
              <Weather weather={this.state.weatherArray} />
                <Card.Img variant="top"
                  src={this.state.imgSrc}
                  alt="map"
                />
                </div>  
                <h2 style={{color: "white"}}>Popular Movies in {this.state.location.display_name}</h2>
                  <div style={{ display: "flex" }}>
                    
                    <Movie movie={this.state.movieArray} style={{}}/>           
                  </div>   
            </>
          )}
        </div>
      </div>
    );
  }
}
export default FormInfo;
