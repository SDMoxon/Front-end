import React from 'react';
import {Link} from 'react-router-dom';


class SinglePatientSearch extends React.Component {
	render () {
		return (
			<div className="component-SinglePatientSearch card">
			<Link to='/patient/:patientid' className=''>{this.props.name}</Link>
            <p>Ward: {this.props.ward}</p>
            <p>Condition: {this.props.condition}</p>
			</div>
		);
	}
}

export default SinglePatientSearch;

