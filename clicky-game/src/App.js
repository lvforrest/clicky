import React, { Component } from 'react';
import Header from "./components/header";
import Main from "./components/main";
import Banner from "./components/banner";
import Footer from "./components/footer";
import Image from "./components/image"; 
import './App.css';
import images from "./components/images.json";
import cole from "./images/cole.jpg";
import gina from "./images/Gina.jpg";
import kyle from "./images/kyle.jpg";
import martin from "./images/martin.png";
import maxine from "./images/maxine.jpg";
import overton from "./images/overton.jpg";
import pam from "./images/Pam.jpg";
import queen from "./images/queen.jpg";
import regine from "./images/regine.png";
import sinclair from "./images/sinclair.jpg";
import tommy from "./images/tommy.jpg";
import fifthFloor from "./images/fifthFloor.png";

class App extends Component {

  state = {
    images:[],
    topScore: 0,
    correct: 0,
  };

  // loadImages = id => {
  //  const images = this.state.images.filter(images =>images.id);
  //  this.setState({images});
  // }
  shuffleArray = (array) => {
    let imgArray = images;
    for (let i = imgArray.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [imgArray[i], imgArray[j]] = [imgArray[j], imgArray[i]];
    }
    return imgArray
  }

  pickImg = (name) => {
    console.log("Clicked!!");
    let picked = this.state.picked;
    
    if (picked.indexOf(name) === -1) {
      this.setState({
        picked: picked.concat(name),
        correct: this.state.correct + 1,
        topscore: this.state.correct + 1 > this.state.topscore ? this.state.correct + 1 : this.state.topscore,
        message: "Correct: Good choice!" 
      })
      this.shuffleArray();
    }
    else {
      this.setState({
        message: "Incorrect: Play again?",
        correct: 0,
        picked: []
      })
    }
  }

 Switch = (name) => {
    switch (name) {
      case "cole":
        return `${cole}`
      case "gina":
        return `${gina}`
      case "martin":
        return `${martin}`
      case "kyle":
        return `${kyle}`
      case "maxine":
        return `${maxine}`
      case "overton":
        return `${overton}`
      case "pam":
        return `${pam}`
      case "queen":
        return `${queen}`
      case "tommy":
        return `${tommy}`
      case "regine":
        return `${regine}`
      case "bruhman":
        return `${fifthFloor}`
      case "sinclair":
        return `${sinclair}`
      default:
        return `${cole}`
    
    }
  }


  render() {
    return (
      <Header>
      <h1> Clicky Game </h1>
      <Banner correct={this.state.correct} topscore={this.state.topscore} message={this.state.message}/>
      <Main>
      {this.state.map(images =>(
        <Image src={this.Switch(images.name)} name={images.name} key={images.name} pickImg={this.pickImg} />
      ))}
      </Main>
      <Footer>
      </Footer>
      </Header>
    );
  }
}

export default App;
