import React from 'react'

const selectPlayerMenu = (props) => {
	const style = {
		position: 'absolute',
		top: props.y,
		left: props.x,
		height: '50px',
		width: '50px',
		border: '1px solid black',
		backgroundColor: ''
	}
	return (<div style={style}>
			</div>)
}

export default selectPlayerMenu