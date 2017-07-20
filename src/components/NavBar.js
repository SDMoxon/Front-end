import React from 'react';
import PropTypes from 'prop-types';

import './component_styles/NavBar.css';

class NavBar extends React.Component {
	constructor (props) {
		super(props);
	}

	render () {
		return (
			<div className="component-NavBar">
				<ul>
					<button >
						<i className="fa fa-window-close" aria-hidden="true"></i>
					</button>
					<button onClick={this.props.toggleVitalForm}>
						<i className="fa fa-thermometer-three-quarters" aria-hidden="true"></i>
					</button>
					<button onClick={this.props.toggleCurrentMeds}>
						<i className="fa fa-medkit" aria-hidden="true"></i>
					</button>
					<button >
						<i className="fa fa-file-text" aria-hidden="true"></i>
					</button>
				</ul>
			</div>
		);
	}
}

export default NavBar;

NavBar.propTypes = {
	toggleVitalForm: PropTypes.func.isRequired,
	toggleCurrentMeds: PropTypes.func.isRequired

};
