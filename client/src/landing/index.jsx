import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './landing.css';

class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      handle: "",
      title: "",
      url: ""
    };
  }

render(){
  return (
    <div className="App">
    <header className="App-header">
    <Card style={{ width: '80vh', color: 'black' }}>
    <Card.Img variant="top" src="https://via.placeholder.com/300" />
    <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
    Some quick example text to build on the card title and make up the bulk of
    the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
    </Card.Body>
    </Card>

    <Card style={{ width: '80vh', color: 'black' }}>
    <Card.Img variant="top" src="https://via.placeholder.com/200x300" />
    <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
    Some quick example text to build on the card title and make up the bulk of
    the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
    </Card.Body>
    </Card>

    </header>
    </div>
  );
  }
}

export default Landing;
