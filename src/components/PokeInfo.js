import React, { Component} from 'react';

class PokeInfo extends Component {
  state = {
    poke: null
  }
  componentDidMount() {
    console.log('POKEINFO DID MOUNT')
  }

  loadPokemon = () => {
    console.log('loading data')
    const { url } = this.props.pokemon;
    fetch(url)
    .then(resp => resp.json())
    .then(json => {
      this.setState({ poke: json })
    })
  }
  componentDidUpdate(prevProps) {
    console.log('POKEINFO DID UPDATE')
    console.log(this.props.pokemon)
    console.log(prevProps.pokemon)
    const checkPrevPropsExist = (prevProps != null && prevProps.pokemon != null);
    const checkCurrentPropsExist = (this.props.pokemon != null)
    console.log(`checkPrevPropsExist ${checkPrevPropsExist}`)
    console.log(`checkCurrentPropsExist ${checkCurrentPropsExist}`)
    if (checkCurrentPropsExist &&
      checkPrevPropsExist) {
        const checkSelectedPokeDifferent = (prevProps.pokemon.name !== this.props.pokemon.name);
        console.log(`prevProps.pokemon.id ${prevProps.pokemon.name}`)
        console.log(`this.props.pokemon.id ${this.props.pokemon.name}`)
        console.log(`checkSelectedPokeDifferent ${checkSelectedPokeDifferent}`)
        if (  checkSelectedPokeDifferent) {
          this.loadPokemon();
        }
      }
  }

  render() {
    if (this.state.poke) {
      const { id, name, height, weight, ability } = this.state.poke;
      console.log("!!!")
      console.log(this.state)
      return (
        <div>
            <h3>More Information</h3>
            <h4>{id}: {name}</h4>
            <p>Height: {height} | Weight: {weight} {ability} </p>
        </div>
      );
    }

    return null

  }
}

export default PokeInfo;