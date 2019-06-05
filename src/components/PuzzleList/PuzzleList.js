import React,{Component} from 'react'
import classes from './PuzzleList.css'
import EnterName from '../EnterName/EnterName'
import Puzzle from './Puzzle/Puzzle'
import CharacterList from './CharacterList/CharacterList'
import EndGameModal from '../EndGameModal/EndGameModal'
import SelectCharacterMenu from '../SelectCharacterMenu/SelectCharacterMenu'
import FoundCharacterDiv from './FoundCharacterDiv/FoundCharacterDiv'
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
	  					{id: null, name: 'wenda', imgUrl: wenda}, 
	  					{id: null, name: 'wizard', imgUrl: wizard}]},
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
	  	player: {id: null,name: ''},
  		selectedPuzzleId: null,
  		currentScoreId: null,
  		divMenu: {x: null, y: null, display: false},
  		gameScore: [
  			{}
  		],
  		divFoundCharacters: [
  			//{x_top_left: 808, y_top_left: 651, width}
  		],
  		charactersLeftToFind: null,
  		startTime: null,
  		gameOver: false
  	}
  	this.selectCharacterHandler = this.selectCharacterHandler.bind(this)	
  }
  
  

  componentDidMount () {
  	let headers = {'Access-Control-Allow-Origin': "*"}
		axios.get('https://e7223ff9.ngrok.io/puzzles.json', {headers: headers})
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

  

  selectedPuzzleHandler =(id)   =>{
  	
  	
  	let gameScore = this.state.puzzles[id].characters.map(character => {
  		console.log('cahracter', character)
  			return {id: character.id, name: character.name, imgUrl: character.imgUrl, found: false}
  		})
  	console.log('gameScore',gameScore)
  	this.setState({selectedPuzzleId: id , gameScore:  gameScore , charactersLeftToFind: gameScore.length})
  	//start new score session with backend to keep track of time and name
  	this.setStartTimeHandler()
  }

  selectCharacterHandler  (id, name)  {
  	console.log('SelectCharacterhandler fired')
  	//check with backend if positon correct
  	//if correct update gameScore state
  	//if (all characters  gameScore are found){
  	//	update gameOver state

  	let headers = {'Access-Control-Allow-Origin': "*"}
  	let params = {x: this.state.divMenu.x, y:this.state.divMenu.y , name: name}
		axios.get('https://e7223ff9.ngrok.io/puzzle-character-locations/'+ (this.state.selectedPuzzleId + 1)+'.json', {headers: headers, params: params})
		.then(response => {
			//console.log(this.state.selectedPuzzleId)
			if (response.data.status == 'OK'){
			  console.log(response.data)
			  if (response.data.message.found === true) {
			  	let divFoundCharacters = [...this.state.divFoundCharacters, {x_top_left: response.data.message.x, y_top_left: response.data.message.y, width:response.data.message.width, height: response.data.message.height}]
			  	let newGameScore = [...this.state.gameScore]
			  	console.log('newGameScore',newGameScore, response.data)
			  	  newGameScore.map(character => {
			  	  	if (character.id == response.data.message.id ){
			  	  		character.found = 'true'

			  	  	}

			  	  })

			  	  this.setState({gameScore: newGameScore,divFoundCharacters: divFoundCharacters, charactersLeftToFind: this.state.charactersLeftToFind -1})

			  }
			}
			
			
			//if all characters are found set gameOver to true
			if(this.state.charactersLeftToFind == 0) {
				this.updateFinishTimeHandler()
				this.setState({gameOver: true, divMenu:{display: false}})
			}
		})
		.catch(error => {
			console.log(error)
		});

  	
  }

  enterNameHandler = (value) => {
    console.log(value)
    let headers = {'Access-Control-Allow-Origin': "*"}
    let params = {name: value}
    axios.post('https://e7223ff9.ngrok.io/players.json',{headers: headers, name: value})
    	.then(response => {
    		console.log(response.data)
    		this.setState({player: {id: response.data.id,  name: response.data.name}})
    	})
    	.catch(error => {
    		console.log(error)
    	})
    
  }

  setStartTimeHandler = () => {
  	//post to Scores create with params player_id, puzzle_id
  	let headers = {'Access-Control-Allow-Origin': "*"}
    let params = {player_id: this.state.player.id, puzzle_id: this.state.selectedPuzzleId+1}
    axios.post('https://e7223ff9.ngrok.io/scores.json',{headers: headers, player_id: this.state.player.id, puzzle_id: this.state.selectedPuzzleId+1})
    	.then(response => {
    		console.log(response.data)
    		this.setState({currentScoreId: response.data.id})
    	})
    	.catch(error => {
    		console.log(error)
    	})
  }

  updateFinishTimeHandler = () => {
  	axios.patch('https://e7223ff9.ngrok.io/scores.json',{ player_id: this.state.player.id, puzzle_id: this.state.selectedPuzzleId+1})
    	.then(response => {
    		console.log(response.data)
    		
    	})
    	.catch(error => {
    		console.log(error)
    	})
  	
  }

  newGameHandler = ()=> {
  	//set playername null
  }

  openDivMenuHandler = (event) => {
  	console.log(event.pageX, event.pageY)
  	this.setState({divMenu: {x: event.pageX, y: event.pageY, display: true}})
  	//console.log(event.clientY, event.clientX)

	
  }

	render() {
		let selectedPuzzle = null;
		let selectedPuzzleAndCharacters = null;
		let puzzleList = null;
		let divSelectCharacterMenu = null;
		let divFoundCharacters = null;
		let endGameModal = null;
		let enterName = null;
		if( this.state.player.name === '') {
		  	return enterName = <EnterName clicked={this.enterNameHandler} />
		  	
		  }
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
		 					    gameScore={this.state.gameScore}
		 					    />
		 					</React.Fragment>)
		    if (this.state.divMenu.display) {
	  	  	   divSelectCharacterMenu = <SelectCharacterMenu 
	  	  				  x={this.state.divMenu.x} 
	  	  				  y={this.state.divMenu.y} 
	  	  				  pclicked={this.selectCharacterHandler}
	  	  				 characters={this.state.gameScore}
	  	  				 >
	  	  				 </SelectCharacterMenu>
	  	  						
	  	    }					
		    if (this.state.divFoundCharacters.length> 0) {
		  	  divFoundCharacters = this.state.divFoundCharacters.map(character =>{
		  		return <FoundCharacterDiv 
		  				  x = {character.x_top_left}
		  				  y = {character.y_top_left}
		  				  width={character.width}
		  				  height={character.height}/>
		  	  })
		  	
		  }

		  
		  if(this.state.gameOver) {
		  	endGameModal = <EndGameModal />
		  	selectedPuzzleAndCharacters=null
		  	divFoundCharacters=null
		  }
		}

	  return(
	  	<div className={classes.PuzzleList}>
	  	  {enterName}
	  	  {puzzleList }
	  	  {divSelectCharacterMenu}
	  	  {endGameModal}
	  	  {selectedPuzzleAndCharacters}
	  	  {divFoundCharacters}
	  	</div>
		)
	}
}

export default PuzzleList