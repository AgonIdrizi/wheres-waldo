import React,{Component} from 'react'
import classes from './PuzzleList.css'
import Puzzle from './Puzzle/Puzzle'
import CharacterList from './CharacterList/CharacterList'
import EndGameModal from '../EndGameModal/EndGameModal'
import SelectCharacterMenu from '../SelectCharacterMenu/SelectCharacterMenu'
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
  constructor(props) {
  	super();
  	this.state = {
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
	  					{id: null, name: 'wenda', imgUrl: wenda}, 
	  					{id: null, name: 'wizard', imgUrl: wizard}, 
	  					{id: null, name: 'odlaw', imgUrl: odlaw}]},
	  	{id:5, title: 'very hard', imgUrl:very_hard, 
	  		characters: [{id: null, name: 'waldo', imgUrl: waldo}, 
	  					{id: null, name: 'wenda', imgUrl: wenda}, 
	  					{id: null, name: 'wizard', imgUrl: wizard}, 
	  					{id: null, name: 'odlaw', imgUrl: odlaw}]},
	  	{id:6, title: 'insane', imgUrl:insane, 
	  		characters: [{id: null, name: 'waldo', imgUrl: waldo}, 
	  					{id: null, name: 'wenda', imgUrl: wenda}, 
	  					{id: null, name: 'wizard', imgUrl: wizard}, 
	  					{id: null, name: 'odlaw', imgUrl: odlaw}]}
	  	],
  		selectedPuzzleId: null,
  		divMenu: {x: null, y: null, display: false},
  		gameScore: [
  			{}
  		],
  	
  		startTime: null,
  		gameOver: false
  	}
  	this.selectCharacterHandler = this.selectCharacterHandler.bind(this)	
  }
  
  

  componentDidMount () {
  	let headers = {'Access-Control-Allow-Origin': "*"}
		axios.get('https://a7fb500a.ngrok.io/puzzles.json', {headers: headers})
		.then(response => {
			let puzzles = [...this.state.puzzles]
			
			response.data.forEach((obj,index) => {
			  puzzles[index].id = obj.puzzle.id
			  puzzles[index].title= obj.puzzle.title
			  puzzles[index].characters = obj.characters.map((character,i) => {
			  	console.log(character)
			  	return {id: obj.characters[i].id, name: obj.characters[i].name, imgUrl: puzzles[index].characters[i].imgUrl}
			  })
			})
			this.setState({puzzles: puzzles})
			
		})
		.catch(error => {
			console.log(error)
		});
	}

  

  selectedPuzzleHandler =(id)   =>{
  	
  	let gameScore
  	gameScore = this.state.puzzles[id].characters.map(character => {
  		
  			return {id: character.id, name: character.name, found: false}
  		})
  	
  	this.setState({selectedPuzzleId: id , gameScore:  gameScore })
  	//start new score session with backend to keep track of time and name
  }

  selectCharacterHandler  (id, name)  {
  	console.log('SelectCharacterhandler fired')
  	//check with backend if positon correct
  	//if correct update gameScore state
  	//if (all characters  gameScore are found){
  	//	update gameOver state

  	let headers = {'Access-Control-Allow-Origin': "*"}
  	let params = {x: this.state.divMenu.x, y:this.state.divMenu.y , name: name}
		axios.get('https://a7fb500a.ngrok.io/puzzle-character-locations/'+ (this.state.selectedPuzzleId + 1)+'.json', {headers: headers, params: params})
		.then(response => {
			//console.log(this.state.selectedPuzzleId)
			if (response.data.status == 'OK'){
			  console.log(response.data)
			  if (response.data.message.found === true) {
			  	let newGameScore = [...this.state.gameScore]
			  	  newGameScore.map(character => {
			  	  	if (character.id == response.data.message.id ){
			  	  		character.found = 'true'
			  	  	}

			  	  })
			  	  this.setState({gameScore: newGameScore})

			  }
			}
			
			
			//if all characters are found set gameOver to true
		})
		.catch(error => {
			console.log(error)
		});

		if (this.state.gameOver) {

		}
  	
  }

  openDivMenuHandler = (event) => {
  	console.log(event.pageX, event.pageY)
  	this.setState({divMenu: {x: event.pageX, y: event.pageY, display: true}})
  	//console.log(event.clientY, event.clientX)

	
  }

	render() {
		let selectedPuzzle = null;
		let selectedPuzzleAndCharacters = null;
		let puzzleList = null
		let divMenu = null
		let endGameModal = null
		if (this.state.selectedPuzzleId == null) {
			puzzleList = this.state.puzzles.map(elem => {
			return <Puzzle
					key={elem.id - 1} 
					title={elem.title}
					img={elem.imgUrl}
					clicked={(event) =>this.selectedPuzzleHandler(elem.id -1 )}/>
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
		 					    characters={selectedPuzzle.characters}
		 					    gameScore={this.state.gameScore}
		 					    />
		 					</React.Fragment>)
		  if (this.state.divMenu.display) {
	  	  	  divMenu = <SelectCharacterMenu 
	  	  				  x={this.state.divMenu.x} 
	  	  				  y={this.state.divMenu.y} 
	  	  				  pclicked={this.selectCharacterHandler}
	  	  				 characters={this.state.gameScore}
	  	  				 >
	  	  				 </SelectCharacterMenu>
	  	  						
	  	  }					
		  puzzleList=null
		  if(this.state.gameOver) {
		  	endGameModal = <EndGameModal />
		  	selectedPuzzleAndCharacters=null
		  }
		}

	  return(
	  	<div className={classes.PuzzleList}>
	  	  {puzzleList }
	  	  {divMenu}
	  	  {endGameModal}
	  	  {selectedPuzzleAndCharacters}
	  	</div>
		)
	}
}

export default PuzzleList