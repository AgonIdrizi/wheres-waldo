import React from 'react'
import Character from './Character/Character'
const CharacterList = (props) => {
	return (<div className="characterList">
			<h4>Left to find</h4>
			{props.characters.map((character, index )=> <Character 
												key={character.id}
												found={props.gameScore[index].found ? true : false}
												name={character.name} 
												url={character.imgUrl} /> )}
			</div>)
}

export default CharacterList
