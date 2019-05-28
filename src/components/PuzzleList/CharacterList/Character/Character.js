import React from 'react'
import classes from './Character.css'

const Character = (props) => {
	const found = !props.found ? (<h3>FOUND</h3>) : null
	return (<div className={classes.Character}>
			  {found}
			  <img alt={props.name} src={props.url} />
			  <p>{props.name}</p>
			
			</div>)
}

export default Character