import React from 'react'
import classes from './EnterName.css'

const enterName = (props) => {
	function inputHandler  (event)  {
	  if (event.key === 'Enter'  ) {
      	props.clicked(event.target.value)
      	event.preventDefault();
   	  }else if (event.type == 'click'){
   		props.clicked(event.target.previousElementSibling.value)
   	  }
	}
	return (
	  <div className={classes.enterName}>
	    <p>Enter Name</p>
	    <input type="text" 
	    onKeyPress={inputHandler}/>
	    <button onClick={inputHandler}>Submit</button>
	    <p>if you dont enter a name you'll play as a guest</p>
	  </div>
	)
	
}

export default enterName