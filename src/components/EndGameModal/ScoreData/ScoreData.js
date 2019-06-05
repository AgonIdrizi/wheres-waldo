import React from 'react'
import classes from './ScoreData.css'
const scoreData = (props) => {
	return (<div className={classes.ScoreData}>
			<p>{props.name}{props.time}</p>
		</div>)
}

export default scoreData;