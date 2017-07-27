import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class PatientList extends React.Component {
	render () {
		return (
			<div className="component-patient-list">
				<table className='table is-narrow'>

					<thead>
						<tr>
							<th>NHS Number</th>
							<th>Name</th>
							<th>Condition</th>
						</tr>
					</thead>
					<tbody>
						{Object.keys(this.props.patients).map((key, i) => {
							return (
								[<tr key={i}>
									<th>{this.props.patients[key]['NHS number']}</th>
									<td><Link to={`/patient/${key}`}>{this.props.patients[key].name}</Link></td>
									<td>{this.props.patients[key].condition}</td>
								</tr>]
							);
						})}
					</tbody>
				</table>
			</div>
		);
	}
}

export default PatientList;

PatientList.propTypes = {
	patients: PropTypes.object.isRequired
};
