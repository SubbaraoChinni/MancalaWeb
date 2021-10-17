import React from 'react';
import Game from './Game';

class App extends React.Component{
  
  // componentDidMount(){
  //   fetch("https://localhost:8080/game/")
  //   .then(response => response.json())
  //   .then(data => console.log('data'));
  // }

  handleStartGame() {
					<Game />
        }

  render(){
    return(
      <div>
        <button onClick={this.handleStartGame}>start game</button>
      </div>
    )
  }
}

export default App;
