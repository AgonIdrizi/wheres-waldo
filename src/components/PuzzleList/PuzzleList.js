import React,{Component} from 'react'
import classes from './PuzzleList.css'
import Puzzle from './Puzzle/Puzzle'
import easy from '../../assets/images/easy.jpg';
import very_easy from '../../assets/images/very_easy.jpg';
import normal from '../../assets/images/normal.jpg';
import hard from '../../assets/images/hard.jpg';
import very_hard from '../../assets/images/very_hard.jpg';
import insane from '../../assets/images/insane.jpg';
import odlaw from '../../assets/images/odlaw.jpg';
import wizard from '../../assets/images/wizard.jpg';
import waldo from '../../assets/images/waldo.jpg';
import PlayerList from './PlayerList/PlayerList'
class PuzzleList extends Component {
  state = {
  	puzzles : [
  	{id:1, title: 'very easy', imgUrl: very_easy , 
  		players: [{name: 'waldo', imgUrl: waldo}, {name: 'wizard', imgUrl: wizard}]},
  	{id:2, title: 'easy', imgUrl: easy, 
  		players: ['waldo', 'winky']},
  	{id:3, title: 'normal', imgUrl:normal, 
  		players: ['waldo', 'winky']},
  	{id:4, title: 'hard', imgUrl:hard, 
  		players: ['waldo', 'winky']},
  	{id:5, title: 'very hard', imgUrl:very_hard, 
  		players: ['waldo', 'winky']},
  	{id:6, title: 'insane', imgUrl:insane, 
  		players: ['waldo', 'winky']}
  	],
  	selectedPuzzleId: null
  }

  selectedPuzzleHandler = (id) => {
  	console.log(id)
  	this.setState({selectedPuzzleId: id+1})
  }

	render() {
		let selectedPuzzleId = null;
		let selectedPuzzle = null;
		let puzzleList = null
		if (this.state.selectedPuzzleId == null) {
			puzzleList = this.state.puzzles.map(elem => {
			return <Puzzle
					key={elem.id} 
					title={elem.title}
					img={elem.imgUrl}
					clicked={(event) =>this.selectedPuzzleHandler(elem.id)}/>
			})
		} else {
		  selectedPuzzleId = this.state.puzzles[this.state.selectedPuzzleId ]
		  selectedPuzzle = (<React.Fragment>
		  					  <Puzzle 
		  					    title={selectedPuzzleId.title}
		  						img={selectedPuzzleId.imgUrl}
		  						selected={true} />
		 					  <PlayerList 
		 					    players={selectedPuzzleId.players} />
		 					</React.Fragment>)
		  					console.log(selectedPuzzleId.imgUrl)
		  puzzleList=null
		}
	  return(
	  	<div className={classes.PuzzleList}>
	  	  {puzzleList}
	  	  {selectedPuzzle}
	  	</div>
		)
	}
}

export default PuzzleList