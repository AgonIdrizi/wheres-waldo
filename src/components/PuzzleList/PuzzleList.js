import React,{Component} from 'react'
import classes from './PuzzleList.css'
import Puzzle from './Puzzle/Puzzle'
import easy from '../../assets/images/easy.jpg';
import very_easy from '../../assets/images/very_easy.jpg';
import normal from '../../assets/images/normal.jpg';
import hard from '../../assets/images/hard.jpg';
import very_hard from '../../assets/images/very_hard.jpg';
import insane from '../../assets/images/insane.jpg';
class PuzzleList extends Component {
  state = {
  	puzzles : [
  	{id:1, title: 'very easy', imgUrl: very_easy},
  	{id:2, title: 'easy', imgUrl: easy},
  	{id:3, title: 'normal', imgUrl:normal},
  	{id:4, title: 'hard', imgUrl:hard},
  	{id:5, title: 'very hard', imgUrl:very_hard},
  	{id:6, title: 'insane', imgUrl:insane}
  	],
  	selectedPuzzleId: null
  }

  selectedPuzzleHandler = (id) => {
  	console.log(id)
  	this.setState({selectedPuzzleId: id})
  }
	render() {
		let selectedPuzzle = null;
		let puzzleList = null
		if (selectedPuzzle == null) {
			puzzleList = this.state.puzzles.map(elem => {
			return <Puzzle
					key={elem.id} 
					title={elem.title}
					img={elem.imgUrl}
					clicked={(event) =>this.selectedPuzzleHandler(elem.id)}/>
			})
		} else {
		  selectedPuzzle = this.state.puzzles[this.state.selectedPuzzleId+ 1]
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