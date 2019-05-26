import React from 'react'
import classes from './Player.css'

const Player = (props) => {
	console.log(props.players)
	return (<div className={classes.Player}>
			<img alt={props.name} src={props.url} />
			<p>{props.name}</p>
			</div>)
}

export default Player