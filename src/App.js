import React from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card'
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ErrorMessage from './Error.js';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      location:{},
      searchQuery: '',
      imgSrc: '',
      displayResults: false
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
    console.log(locationArray);
    this.setState({ 
      location: locationArray[0], 
      displayResults: true,
      imgSrc: `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATION_KEY}&center=${locationArray[0].lat},${locationArray[0].lon}&zoom=13`, 
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
        <Form  onSubmit={this.getLocationInfo} >
          <input onChange={(e) => this.setState({ searchQuery: e.target.value })}  placeholder="type a city..."/>
          <Button type="submit">explore!</Button>
        </Form>

        {this.state.displayResults &&

            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="holder.js/100px180" src={this.state.imgSrc} alt=''/>
              <Card.Body>
                <Card.Title>{this.state.location.display_name}</Card.Title>
                <Card.Text>
                <p>Lattitude: {this.state.location.lat}</p>
                
                <p>Longitute: {this.state.location.lon}</p>
                
                </Card.Text>               
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