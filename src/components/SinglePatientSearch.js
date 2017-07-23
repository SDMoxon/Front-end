import React from 'react';
import PropTypes from 'prop-types';

import {Link} from 'react-router-dom';

import './component_styles/SinglePatientSearch.css';


class SinglePatientSearch extends React.Component {
	render () {
		return (
			<div className="card component-SinglePatientSearch">
			<Link to='/patient/:patientid' className=''>{this.props.name}</Link>
            <p>Ward: {this.props.ward}</p>
            <p>Condition: {this.props.condition}</p>
			</div>
		);
	}
}

export default SinglePatientSearch;


SinglePatientSearch.propTypes = {
	name: PropTypes.string.isRequired,
	ward: PropTypes.string.isRequired,
	condition: PropTypes.string.isRequired
};
