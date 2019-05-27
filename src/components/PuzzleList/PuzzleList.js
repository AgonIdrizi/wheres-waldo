import React,{Component} from 'react'
import classes from './PuzzleList.css'
import Puzzle from './Puzzle/Puzzle'
import CharacterList from './CharacterList/CharacterList'
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
import axios from 'axios'
class PuzzleList extends Component {
  state = {
  	puzzles : [
  	{id:1, title: 'very easy', imgUrl: very_easy , 
  		characters: [{id: null, name: 'waldo', imgUrl: waldo}, 
  					{id: null, name: 'wenda', imgUrl: wenda}, 
  					{id: null, name: 'wizard', imgUrl: wizard}]},
  	{id:2, title: 'easy', imgUrl: easy, 
  		characters: [{id: null, name: 'waldo', imgUrl: waldo}, 
  					{id: null, name: 'wizard', imgUrl: wizard}, 
  					{id: null, name: 'odlaw', imgUrl: odlaw}]},
  	{id:3, title: 'normal', imgUrl:normal, 
  		characters: [{id: null, name: 'waldo', imgUrl: waldo}, 
  					{id: null, name: 'wizard', imgUrl: wizard}, 
  					{id: null, name: 'odlaw', imgUrl: odlaw}]},
  	{id:4, title: 'hard', imgUrl:hard, 
  		characters: [{id: null, name: 'waldo', imgUrl: waldo}, 
  					{id: null, name: 'wenda', imgUrl: wizard}, 
  					{id: null, name: 'wizard', imgUrl: wizard}, 
  					{id: null, name: 'odlaw', imgUrl: odlaw}]},
  	{id:5, title: 'very hard', imgUrl:very_hard, 
  		characters: [{id: null, name: 'waldo', imgUrl: waldo}, 
  					{id: null, name: 'wenda', imgUrl: wizard}, 
  					{id: null, name: 'wizard', imgUrl: wizard}, 
  					{id: null, name: 'odlaw', imgUrl: odlaw}]},
  	{id:6, title: 'insane', imgUrl:insane, 
  		characters: [{id: null, name: 'waldo', imgUrl: waldo}, 
  					{id: null, name: 'wenda', imgUrl: wizard}, 
  					{id: null, name: 'wizard', imgUrl: wizard}, 
  					{id: null, name: 'odlaw', imgUrl: odlaw}]}
  	],
  	selectedPuzzleId: null,
  	divMenu: {x: null, y: null, display: false}
  }

  componentDidMount () {
  	let headers = {'Access-Control-Allow-Origin': "*"}
		axios.get('https://03150ea3.ngrok.io/puzzles.json', {headers: headers})
		.then(response => {
			let puzzles = [...this.state.puzzles]
			
			response.data.forEach((obj,index) => {
			  puzzles[index].id = obj.puzzle.id
			  puzzles[index].title= obj.puzzle.title
			  puzzles[index].characters = obj.characters.map((character,i) => {
			  	return {id: obj.characters[i].id, name: obj.characters[i].name, imgUrl: puzzles[index].characters[i].imgUrl}
			  })
			})
			this.setState({puzzles: puzzles})
			
		})
		.catch(error => {
			console.log(error)
		});
	}

  

  selectedPuzzleHandler = (id) => {
  	console.log(id)
  	this.setState({selectedPuzzleId: id})
  }

  openDivMenuHandler = (event) => {
  	console.log(event.pageY, event.pageX)
  	this.setState({divMenu: {x: event.pageX, y: event.pageY, display: true}})
  	console.log(event.clientY, event.clientX)

	
  }

	render() {
		let selectedPuzzle = null;
		let selectedPuzzleAndCharacters = null;
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
		  selectedPuzzle = this.state.puzzles[this.state.selectedPuzzleId ]
		  selectedPuzzleAndCharacters = (<React.Fragment>
		  					  <Puzzle 
		  					    title={selectedPuzzle.title}
		  						img={selectedPuzzle.imgUrl}
		  						selected={true}
		  						clicked ={this.openDivMenuHandler} />
		 					  <CharacterList 
		 					    characters={selectedPuzzle.characters} />
		 					</React.Fragment>)
		  					console.log(selectedPuzzle)
		  puzzleList=null
		}
	  return(
	  	<div className={classes.PuzzleList}>
	  	  {puzzleList}
	  	  {this.state.divMenu.display ? <SelectPlayerMenu x={this.state.divMenu.x} y={this.state.divMenu.y} /> : null}
	  	  {selectedPuzzleAndCharacters}
	  	</div>
		)
	}
}

export default PuzzleList