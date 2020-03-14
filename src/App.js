import React from 'react';
import img from './img.png';
import Time from './Time'

import './App.css';




class App extends React.Component {
  state = {
    career: "I am a frontend developer",
    skil: " ",
    email: "azmajpress@gmail.com", 
    location: "Sweden"

}

handleClick = e => {
  this.setState({skill: "HTML, CSS & JAVASCRIPT"})
}
   
  render() {
   
    return (
      <React.Fragment>
      <div className="Card-container">
        <Time />
       <img src ={img} alt=" "/>
        <h1>{this.state.career}</h1>
        <p>{this.state.skill}</p>
        <button onClick={this.handleClick}>Click Me</button>
        <p>{this.state.email}</p>
        <p>{this.state.location}</p>
        </div>
      </React.Fragment>
    )
  }
}

export default App

