import React, { Component } from 'react';
import Cardlist from './Cardlist';
import Searchbox from './Searchbox'
import {robots} from './robots';
import Scroll from './Scroll';
import './App.css';

class App extends Component {
	constructor() {
		super()
		this.state = {
	robots: robots,
	searchfield: ''
	}
}
	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then(users => {this.setState({robots:users})});	
}
onSearchChange = (event) => {
	this.setState({ searchfield: event.target.value })
}
	
	render(){
		const{ robots,searchfield } = this.state;
		const filteredRobots = robots.filter(robots =>{
		return robots.name.toLowerCase().includes(searchfield.toLowerCase());
	})
	if(!robots.length){
		return <h1>Loading</h1>
	}else {
		return (
		<div className='tc'>
		<h1 className='f1'>Robofriends</h1>
		<Searchbox searchChange={this.onSearchChange}/>
		<Scroll>
		<Cardlist robots={filteredRobots}/>
		</Scroll>
		</div>
		);
	}
}
}
export default App;