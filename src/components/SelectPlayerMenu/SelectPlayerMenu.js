import React from 'react'
import classes from './SelectPlayerMenu.css'
const selectPlayerMenu = (props) => {
	const style = {
		position: 'absolute',
		height: '110px',
		width: '130px',
		border: '1px solid black',
		backgroundColor: '#dccdcd',
		top: props.y,
		left: props.x,
		
	}
	const charactersName = props.characters.map(character => (
		<p key={character.id} data = {character.found}>{character.name}</p>))
		console.log(props.characters)
	return (<div className={classes.SelectPlayerMenu} style={style}>
			  <h4 className={classes.title}>Who you found?</h4>
			  
			  {charactersName}
			</div>)
}

export default selectPlayerMenu