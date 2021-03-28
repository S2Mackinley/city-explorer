import React from "react";

import Container from "react-bootstrap/Container";


import Header from "./header";
import FormInfo from "./form"


// in env change local to heroku address

class App extends React.Component {

  render() {
    return (
      <div>
        <Container className="align-middle p-0">
          <Header getLocationInfo={this.getLocationInfo} />
          <FormInfo/>          
        </Container>
      </div>
    );
  }
}

export default App;
