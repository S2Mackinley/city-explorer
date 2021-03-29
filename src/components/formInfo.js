import React from 'react';
import { Form, Button } from 'react-bootstrap';

class CityForm extends React.Component {
  render() {
    return (
      <Form onSubmit={this.props.getLocationInfo}>
        <Form.Group>
          <Form.Control onChange={(e) => this.props.updateSearchQuery(e.target.value)} placeholder="Type a city and a state..." />
        </Form.Group>
        <Button variant="primary" type="submit">Explore!</Button>
      </Form>
    )
  }
}

export default CityForm;
