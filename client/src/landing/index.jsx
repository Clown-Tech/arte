import React from 'react';
import { Card, Button } from 'react-bootstrap';
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import './landing.css';

class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ""
    };
    this.renderCards = this.renderCards.bind(this);
    this.myFunc = this.myFunc.bind(this);
  }

  renderCards(){
    var cardArray = [];
    for(var i = 0; i <  Object.keys(this.state.data).length; i++){
      cardArray.push(
        <div className = "cardClass">
        <Card style={{ width: '80vh', color: 'black' }}>
        <Card.Img variant="top" src={this.state.data[i].url} />
        <Card.Body>
        <Card.Title>{this.state.data[i].title}</Card.Title>
        <Card.Text>
        {this.state.data[i].handle}
        </Card.Text>
        <Card.Link> <FontAwesomeIcon icon={faEye}/> {this.state.data[i].viewerCount} </Card.Link>
        <Card.Link> <button value = {i} onClick={this.myFunc} style={{background: 'none', border:'none', color: (this.state.data[i] === false ? "black" : "red")}}><FontAwesomeIcon icon={faThumbsUp}/> {this.state.data[i].add === true ? (this.state.data[i].votes + 1) : this.state.data[i].votes} </button></Card.Link>
        </Card.Body>
        </Card>
        </div>
      )
    }
    return cardArray;
  }

   componentWillMount(){
    axios({
      method: "get",
      url: "http://localhost:3852/api/addImage"
    })
      .then(response => {
        //console.log("gotData!");
        var allData = response.data;
        this.setState({
          data: allData
        });
        console.log(response.data[3]);
      })
      .catch(error => console.error(error));
    }
    myFunc(e) {
      //this.setState({add: !this.state.add});
      //console.log(e.target.value);
      var element = e.target.value;
      console.log(element);
      console.log(this.state.data[element]);

      var someProperty = {...this.state.data}
      console.log(someProperty[element]);
      var temp = someProperty[element].votes
      console.log(temp);
      //someProperty[element] = ...someProperty[element]
      //console.log(this.state.data[element].add);
/*
      this.setState({
        data: ...data, !(this.state.data[element].add)
    });

/*
    this.state = {
   someProperty: {
      someOtherProperty: {
          anotherProperty: {
             flag: true
          }
          ..
      }
      ...
   }
   ...
}

this.setState(state => ({
    ...state,
    data: {
        ...data.[element],
        someOtherProperty: {
            ...prevState.someProperty.someOtherProperty,
            anotherProperty: {
               ...prevState.someProperty.someOtherProperty.anotherProperty,
               flag: false
            }
        }
    }
}))
*/



      /*
      console.log(typeof(this.state.add[e.target.value]))
      this.setState({add: ((this.state.add[element] === undefined) ? (this.state.add[e.target.value] = true) : this.state.add[e.target.value] = false ) });
      //this.setState({add: ((this.state.add[e.target.value] === []) ? (this.state.add[e.target.value] = true) : this.state.add[e.target.value] = !(this.state.add[e.target.value]) });
      //console.log(this.state.add);

      if(e.target.style.color === 'red'){
        e.target.style.color = 'black';
      }else{
          e.target.style.color = 'red';
      }
      */
      }

render(){
  return (this.state.data != "" ?
    (
    <div className="App">
    <header className="App-header">
    {this.renderCards()}
      {/*
    <Card style={{ width: '80vh', color: 'black' }}>
    <Card.Img variant="top" src={this.state.data[3].url} />
    <Card.Body>
    <Card.Title>{this.state.data[3].title}</Card.Title>
    <Card.Text>
    {this.state.data[3].handle}
    </Card.Text>
    <Card.Link> <FontAwesomeIcon icon={faEye}/> {this.state.data[3].viewerCount} </Card.Link>
    <Card.Link> <button onClick={this.myFunc} style={{background: 'none', border:'none', color: (this.state.data != "" ? "black" : "red")}}><FontAwesomeIcon icon={faThumbsUp}/> {this.state.add === true ? (this.state.data[3].votes + 1) : this.state.data[3].votes} </button></Card.Link>
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
    */}
    </header>
    </div>
  ) : null
  );
  }
}

export default Landing;
