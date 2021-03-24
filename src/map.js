import React from 'react';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

class Map extends React.Component{
    render(){
        return(
            <Card.Img variant="top" src={this.props.imageSrc} alt='location'/>
            
        )
    }
}

export default Map;