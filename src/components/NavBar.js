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
					<img src="https://image.flaticon.com/icons/svg/230/230201.svg" onClick={this.props.toggleVitalForm} alt="vitals" className="icon" />
					<img src="https://image.flaticon.com/icons/svg/230/230191.svg" onClick={this.props.toggleCurrentMeds} alt="medication" className="icon" />
					<img src="https://image.flaticon.com/icons/svg/230/230181.svg" onClick={this.props.toggleTestResults} alt="results" className="icon" />
					<img src="https://image.flaticon.com/icons/svg/230/230209.svg" alt="x-ray" className="icon" />
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
