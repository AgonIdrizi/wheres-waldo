import React,{ Component} from 'react'
import ScoreData from './ScoreData/ScoreData'
import classes from './EndGameModal.css'
import axios from 'axios'
class endGameModal extends Component {
	state= {
		scoresData: [
			{id:1, name:'Fake1',time:'123'},
			{id:2, name:'Fake2',time:'32'}
		],
		displayLoading: true
	}
	componentDidMount () {
		
		let params = {puzzle_id: this.props.puzzleId}
    axios.get('https://e7223ff9.ngrok.io/scores.json', {params})
		.then(response => {
		  
		  let newScoresData = [...this.state.scoresData]
		  let topTenScores = response.data.map(score => {
		  	return {id: score.id, name: score.name, time: score.time.toFixed(2)}
		  })
			this.setState({scoresData: topTenScores, displayLoading: false})
		})
		.catch(error => {
			console.log(error)
		});
	}
	render (){
		let data = this.state.displayLoading ? 
						'Loading data ...' : 
						this.state.scoresData.map(data =>{
							return <ScoreData 
									name={data.name}
									time={data.time}
									/>
						})
		
	  return (<div className={classes.EndGameModal}>
		<h3>Game Over</h3>
		{data}
		<button>Play again</button>
		</div>
		)
	}
}

export default endGameModal
