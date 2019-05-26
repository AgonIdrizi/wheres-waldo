import React from 'react'
import Player from './Player/Player'
const PlayerList = (props) => {
	return (<div className="playerList">
			<h4>Left to find</h4>
			{props.players}
			</div>)
}

export default PlayerList
