import React, { Component } from 'react';
import './App.css';
import PokeInfo from './components/PokeInfo';

class App extends Component {
  state = {
    pokemon: [],
    selected: null
  }
  componentDidMount() {
    console.log('App is running componentDidMount');
    const url = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=151';
    fetch(url)
    .then(resp => resp.json())
    .then(json => {
      const pokemon = json.results;
      this.setState({ pokemon: pokemon });
    })
  }

  componentDidUpdate() {
    console.log('POKEINFO DID UPDATE')
  }

  componentWillUnmount() {
    console.log('App is running componentWillUnmount');
  }


  shouldComponentUpdate(newProps, newState) {
    console.log('App is running shouldComponentUpdate');

    return true;
  }
  

  handlePokemonInfo(poke) {
    this.setState({ selected: poke })
  }

  render() {
    console.log(`App is running render ${this.state.pokemon.length}`);
    return (
      <div>
        We have {this.state.pokemon.length} pokemon
        <PokeInfo pokemon={this.state.selected} />
        { this.state.pokemon.map((poke, index) => <h2 key={index} onClick={() => this.handlePokemonInfo(poke)}>{poke.name}</h2>) }
      </div>
    );
  }
}

export default App;
