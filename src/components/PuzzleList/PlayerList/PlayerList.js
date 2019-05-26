import React from 'react'
import Player from './Player/Player'
const PlayerList = (props) => {
	return (<div className="playerList">
			<h4>Left to find</h4>
			{props.players.map(player => <Player name={player.name} url={player.imgUrl} /> )}
			</div>)
}

export default PlayerList
