import React,{Component} from 'react'
import classes from './PuzzleList.css'
import Puzzle from './Puzzle/Puzzle'
import PlayerList from './PlayerList/PlayerList'
import SelectPlayerMenu from '../SelectPlayerMenu/SelectPlayerMenu'
import easy from '../../assets/images/easy.jpg';
import very_easy from '../../assets/images/very_easy.jpg';
import normal from '../../assets/images/normal.jpg';
import hard from '../../assets/images/hard.jpg';
import very_hard from '../../assets/images/very_hard.jpg';
import insane from '../../assets/images/insane.jpg';
import odlaw from '../../assets/images/odlaw.jpg';
import wizard from '../../assets/images/wizard.jpg';
import wenda from '../../assets/images/wenda.jpg';
import waldo from '../../assets/images/waldo.jpg';

class PuzzleList extends Component {
  state = {
  	puzzles : [
  	{id:1, title: 'very easy', imgUrl: very_easy , 
  		players: [{name: 'waldo', imgUrl: waldo, found: false}, {name: 'wenda', imgUrl: wenda, found: false}, {name: 'wizard', imgUrl: wizard, found: false}]},
  	{id:2, title: 'easy', imgUrl: easy, 
  		players: [{name: 'waldo', imgUrl: waldo, found: false}, {name: 'wizard', imgUrl: wizard, found: false}, {name: 'odlaw', imgUrl: odlaw, found: false}]},
  	{id:3, title: 'normal', imgUrl:normal, 
  		players: [{name: 'waldo', imgUrl: waldo}, {name: 'wenda', imgUrl: wenda, found: false}, {name: 'wizard', imgUrl: wizard, found: false}, {name: 'odlaw', imgUrl: odlaw, found: false}]},
  	{id:4, title: 'hard', imgUrl:hard, 
  		players: [{name: 'waldo', imgUrl: waldo}, {name: 'wizard', imgUrl: wizard, found: false}, {name: 'wizard', imgUrl: wizard, found: false}, {name: 'odlaw', imgUrl: odlaw, found: false}]},
  	{id:5, title: 'very hard', imgUrl:very_hard, 
  		players: [{name: 'waldo', imgUrl: waldo}, {name: 'wizard', imgUrl: wizard, found: false}, {name: 'wizard', imgUrl: wizard, found: false}, {name: 'odlaw', imgUrl: odlaw, found: false}]},
  	{id:6, title: 'insane', imgUrl:insane, 
  		players: [{name: 'waldo', imgUrl: waldo}, {name: 'wizard', imgUrl: wizard, found: false}]}
  	],
  	selectedPuzzleId: null,
  	divMenu: {x: null, y: null, display: false}
  }

  selectedPuzzleHandler = (id) => {
  	console.log(id)
  	this.setState({selectedPuzzleId: id})
  }

  openDivMenuHandler = (event) => {
  	
  	this.setState({divMenu: {x: event.clientX, y: event.clientY, display: true}})
  	console.log(event.clientX)

	
  }

	render() {
		let selectedPuzzleId = null;
		let selectedPuzzle = null;
		let puzzleList = null
		if (this.state.selectedPuzzleId == null) {
			puzzleList = this.state.puzzles.map(elem => {
			return <Puzzle
					key={elem.id - 1} 
					title={elem.title}
					img={elem.imgUrl}
					clicked={(event) =>this.selectedPuzzleHandler(elem.id - 1)}/>
			})
		} else {
		  selectedPuzzleId = this.state.puzzles[this.state.selectedPuzzleId ]
		  selectedPuzzle = (<React.Fragment>
		  					  <Puzzle 
		  					    title={selectedPuzzleId.title}
		  						img={selectedPuzzleId.imgUrl}
		  						selected={true}
		  						clicked ={this.openDivMenuHandler} />
		 					  <PlayerList 
		 					    players={selectedPuzzleId.players} />
		 					</React.Fragment>)
		  					console.log(selectedPuzzleId)
		  puzzleList=null
		}
	  return(
	  	<div className={classes.PuzzleList}>
	  	  {puzzleList}
	  	  {this.state.divMenu.display ? <SelectPlayerMenu x={this.state.divMenu.x} y={this.state.divMenu.y} /> : null}
	  	  {selectedPuzzle}
	  	</div>
		)
	}
}

export default PuzzleList