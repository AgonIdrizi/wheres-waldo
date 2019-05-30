import React from 'react'
import classes from './FoundCharacterDiv.css'
const foundCharacterDiv = (props) => {
	const style = {
		height: props.height,
		width: props.width,
		top: props.y,
		left: props.x,
		position: 'absolute',
		backgroundColor: 'black',
		opacity: 0.8
	}

	return (
		<div style={style} className={classes.FoundCharacterDiv}></div>
		)
}

export default foundCharacterDiv
