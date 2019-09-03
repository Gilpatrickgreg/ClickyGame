import React, { Component } from 'react';
import NavBar from "./components/NavBar";
import Wrapper from "./components/Wrapper";
import CharCard from "./components/CharCard";
import characters from "./characters.json";




class App extends Component {

  state = {
    characters: characters,
    pickedChars: [],
    topScore: 0,
    message: ""
  }

  handlePicked = event => {

    const name = event.target.attributes.getNamedItem("name").value;
    this.shuffleCharacters()
    this.checkGuess(name, this.updateTopScore)
  }















};


export default App;
