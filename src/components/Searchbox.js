import React from 'react';

const Searchbox = ({ searchfield, searchChange }) => {
	return (
		<div className='pa2 tc'>
		<input 
		className='pa3 tc ba b--green bg-lightest-blue'
		type='search' 
		placeholder='search robots' 
		onChange={searchChange}/>
		</div>
		);
}
export default Searchbox;