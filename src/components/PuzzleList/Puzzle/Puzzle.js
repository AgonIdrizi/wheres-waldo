import React from 'react'
import classes from './Puzzle.css'
const puzzle = (props) => {
	
	
	return(
		<div 
		className={classes.Puzzle}
		onClick={props.clicked}>
		  <img alt="puzzle" src={props.img} />
		  <p>{props.title}</p>
		</div>
	)
}

export default puzzle