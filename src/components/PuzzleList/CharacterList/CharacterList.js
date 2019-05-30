import React from 'react'
import Character from './Character/Character'
const CharacterList = (props) => {
	return (<div className="characterList">
			<h4>Left to find</h4>
			{props.gameScore.map((character, index )=> <Character 
												key={character.id}
												found={character.found}
												name={character.name} 
												url={character.imgUrl} /> )}
			</div>)
}

export default CharacterList
