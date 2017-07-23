import React from 'react';
import PropTypes from 'prop-types';

import './component_styles/NavBar.css';

class NavBar extends React.Component {
	constructor (props) {
		super(props);
	}
	
	render () {
		if (this.props.showNavBar) {
			return (
				<div className="component-NavBar">
					<i className="fa fa-window-close" aria-hidden="true"></i>
					<i onClick={this.props.toggleVitalForm} className="fa fa-thermometer-three-quarters" aria-hidden="true"></i>
					<i onClick={this.props.toggleCurrentMeds} className="fa fa-medkit" aria-hidden="true"></i>
					<i onClick={this.props.toggleTestResults} className="fa fa-file-text" aria-hidden="true"></i>
				</div>
			);
		}
		return (
			<div></div>
		);
	}
}

export default NavBar;

NavBar.propTypes = {
	toggleVitalForm: PropTypes.func.isRequired,
	toggleCurrentMeds: PropTypes.func.isRequired,
	toggleTestResults: PropTypes.func.isRequired,
	showNavBar: PropTypes.bool.isRequired
};
