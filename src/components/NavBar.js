import React from 'react';

import './component_styles/NavBar.css';

class NavBar extends React.Component {
	render () {
		return (
			<div className="component-NavBar">
				<ul>
					<i className="fa fa-window-close" aria-hidden="true"></i>
					<i className="fa fa-thermometer-three-quarters" aria-hidden="true"></i>
					<i className="fa fa-medkit" aria-hidden="true"></i>
					<i className="fa fa-file-text" aria-hidden="true"></i>

				</ul>
			</div>

		);
	}
}

export default NavBar;


