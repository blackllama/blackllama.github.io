import React, { Component } from 'react';
import { Card } from './components/card.js';
import logo from './logo.svg';
import uuid from 'uuid/v1';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state={
      places:
      [ 
      ]
    }
  }

  componentWillMount() {
    this.getData()
  }

  getData() {
    this.setState({
      places:[
        {
          id: uuid(),
          name: "16 Handles",
          details: "Froyo",
          image: logo,
          starsSelected: 0,
        },
        {
          id: uuid(),
          name: "Tasti D-Lite",
          details: "Froyo",
          image: logo,
          starsSelected: 0,
        },
        {
          id: uuid(),
          name: "Target",
          details: "Shopping",
          image: logo,
          starsSelected: 0,
        },
      ]
    });
  }

  OnChange(id, starsSelected) {
    this.setState(
      [...this.state.places].map((place) => {
        if(place.id === id) {
          place.starsSelected = starsSelected
        }
      })
    );
  }

  render() {
    return (
      <div className="main-body">
        <div className="heading"> 
          Places we've been
        </div>

        {[...this.state.places].map((place, index) => {
          let name = place.name
          let image = place.image
          let details = place.details
          let starsSelected = place.starsSelected
          let id = place.id
          return(
            <Card
              key={index}
              name={name}
              details={details}
              image={image}
              starsSelected={starsSelected}
              id={id}
              change={(id, starsSelected) => this.OnChange(id, starsSelected)}
            />
          )
        })}      
      </div>
    );
  }
}

export default App;

// npm run build
// copy build folder contents to root (automate/replace this)
// git add --all
// git commit -m ""
//git push origin master


// npm install --save-dev gh-pages