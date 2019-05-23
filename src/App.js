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
    let puzzleList = null;
    if (this.state.name === ''){
      puzzleList =<EnterName clicked={this.enterNameHandler} /> 
    }else{
      puzzleList = <PuzzleList />
    }
    return (
      <div className={classes.App}>
        <p>Wheres Waldo</p>
        {puzzleList}
      </div>
    );
  }
}

export default App;
