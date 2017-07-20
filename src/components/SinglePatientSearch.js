import React from 'react';
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

