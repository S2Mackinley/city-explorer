import React from "react";

import Container from "react-bootstrap/Container";


import Header from "./header";
import Body from "./body"


// in env change local to heroku address

class App extends React.Component {

  render() {
    return (
      <div>
        <Container className="align-middle p-0">
          <Header getLocationInfo={this.getLocationInfo} />
          <Body/>          
        </Container>
      </div>
    );
  }
}

export default App;
