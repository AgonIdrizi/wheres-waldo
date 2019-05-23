import React,{Component} from 'react'
class PuzzleList extends Component {
  state = {
  	puzzles : [
  	{id:1, title: 'very easy', imgUrl:''},
  	{id:2, title: 'easy', imgUrl:''},
  	{id:3, title: 'normal', imgUrl:''},
  	{id:4, title: 'hard', imgUrl:''},
  	{id:5, title: 'very hard', imgUrl:''},
  	{id:6, title: 'insane', imgUrl:''}
  	]
  }
	render() {
	  return(
	  	<div>
	  	<p>PuzzleList</p>
	  	</div>
		)
	}
}

export default PuzzleList