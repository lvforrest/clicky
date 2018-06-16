import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import images from "./images.json"

class App extends Component {

  state = {
    images
  };

  loadImages = id => {
   const images = this.state.images.filter(images =>images.id);
   this.setState({images});
  }

  render() {
    return (
      <Wrapper>
      <Title> Clicky Game </Title>
      {this.state. map(images =>(
        <Image
         loadImages ={this.loadImages}
         id = {images.id}
         name = {images.name}
         show = {images.show}
         />
      ))}
      </Wrapper>
    );
  }
}

export default App;
