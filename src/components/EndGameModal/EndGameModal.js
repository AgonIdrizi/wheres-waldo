import React from 'react'
import classes from './EndGameModal.css'
const endGameModal = (props) => {
	return (<div className={classes.EndGameModal}>
		<h3>Game Over</h3>
		<button>Play again</button>
		</div>
		)
}

export default endGameModal
