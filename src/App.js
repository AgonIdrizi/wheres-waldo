import React, { Component } from 'react';
import EnterName from './components/EnterName/EnterName'
import PuzzleList from './components/PuzzleList/PuzzleList'
import classes from './App.css';

class App extends Component {
  
  

  render () {
    
    return (
      <div className={classes.App}>
        <p>Wheres Waldo</p>
        <PuzzleList />
      </div>
    );
  }
}

export default App;
