import React from 'react'
import classes from './SelectCharacterMenu.css'
const selectCharacterMenu = (props) => {
	const style = {
		position: 'absolute',
		height: '110px',
		width: '130px',
		border: '1px solid black',
		backgroundColor: '#dccdcd',
		top: props.y,
		left: props.x,
		
	}

	
	const charactersName = props.characters.map(character => {
		if (character.found == false) {
		   return (<p onClick={() => props.pclicked(character.id, character.name)} key={character.id} >{character.name}</p>)
		}
		})
	return (<div className={classes.SelectCharacterMenu} style={style}>
			  <h4 className={classes.title}>Who you found?</h4>
			  
			  {charactersName}
			</div>)
}

export default selectCharacterMenu