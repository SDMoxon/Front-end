import React from 'react';

import './component_styles/SearchBar.scss';

class SearchBar extends React.Component {
	render () {
		return (
			<div className="component-SearchBar">
				<form className='search-for-patient'>
					<span><input className="input" type="text" placeholder="Search..." /></span>
				</form>
			</div>
		);
	}
}

export default SearchBar;

