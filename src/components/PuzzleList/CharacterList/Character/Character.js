import React from 'react'
import classes from './Character.css'

const Character = (props) => {
	
	return (<div className={classes.Character}>
			<img alt={props.name} src={props.url} />
			<p>{props.name}</p>
			</div>)
}

export default Character