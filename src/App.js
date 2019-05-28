import React, { Component } from 'react';
import EnterName from './components/EnterName/EnterName'
import PuzzleList from './components/PuzzleList/PuzzleList'
import classes from './App.css';

class App extends Component {
  
  state = {
    name: ''
  }

  enterNameHandler = (value) => {
    console.log(value)
    if (value == '')
      value = 'Guest'
    this.setState({name: value})
  }

  render () {
    let display = null;
    if (this.state.name === ''){
      display =<EnterName clicked={this.enterNameHandler} /> 
    }else{
      display = <PuzzleList playerName={this.state.name} />
    }
    return (
      <div className={classes.App}>
        <p>Wheres Waldo</p>
        {display}
      </div>
    );
  }
}

export default App;
