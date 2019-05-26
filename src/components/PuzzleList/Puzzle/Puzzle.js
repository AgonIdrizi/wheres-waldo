import React from 'react'
import classes from './Puzzle.css'
const puzzle = (props) => {
	
	
	return(
		<div 
		className={props.selected ? null :classes.Puzzle}
		onClick={props.clicked}>
		  <img className={props.selected ? classes.PuzzleSelected : classes.img} alt="puzzle" src={props.img} />
		  <p>{props.title}</p>
		</div>
	)
}

export default puzzle