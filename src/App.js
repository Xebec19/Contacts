import React, { useState,useEffect } from 'react';
import Cardlist from './components/Cardlist';
import Searchbox from './components/Searchbox'
import {robots} from './components/robots';
import Scroll from './components/Scroll';
import ErrorBoundry from './components/ErrorBoundry';
import './App.css';

function App() {
	/*constructor() {
		super()
		this.state = {
	robots: robots,
	searchfield: ''
	}
}*/
const [robots, setRobots] = useState([])
const [searchfield, setSearchField] = useState('')

useEffect(() => {
	fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then((users) => {
			setRobots(users);
			console.log(users);
	})	
},[])
	/*componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then(users => {this.setState({robots:users})});	
}*/
const onSearchChange = (event) => {
	/*this.setState({ searchfield: event.target.value })*/
	setSearchField(event.target.value);
}
	const filteredRobots = robots.filter((robots) => {
		return robots.name.toLowerCase().includes(searchfield.toLowerCase());
	})
	if(!robots.length){
		return <h1>Loading</h1>
	}else {
		return (
		<div className='tc'>
		<h1 className='f1'>Robofriends</h1>
		<Searchbox searchChange={onSearchChange}/>
		<Scroll>
		<ErrorBoundry>
		<Cardlist robots={filteredRobots}/>
		</ErrorBoundry>	
		</Scroll>
		</div>
		);
	}
/*}*/
}
export default App;