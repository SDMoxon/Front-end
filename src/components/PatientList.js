import React from 'react';

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
						{this.props.patients.map((patient) => {
							return ([<tr key={patient.id}>
								<th>{patient.id}</th>
								<td><a href="#" title="Ben Butcher">{patient.name}</a></td>
								<td>{patient.condition}</td>
							</tr>]);
						})}
					</tbody>


				</table>
			</div>
		);
	}
}

export default PatientList;

