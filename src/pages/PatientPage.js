import React from 'react';

import MedicalRecords from '../components/MedicalRecords';
import PatientSummary from '../components/PatientSummary';
import VitalsDisplay from '../components/VitalsDisplay';
import StaffTasks from '../components/StaffTasks';
import NavBar from '../components/NavBar';
import VitalForm from '../components/VitalForm';


class PatientPage extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			vitalIsOpen: false
		};
		this.toggleVitalForm = this.toggleVitalForm.bind(this);
	}

	toggleVitalForm () {
		this.setState({
			vitalIsOpen: !this.state.vitalIsOpen
		});
	}

	render () {
		return (
			<div className="patient-page">
				<div className="columns">
					<div className="column is-4">
						<MedicalRecords />
						<PatientSummary />
						<VitalsDisplay />
					</div>
					<div className="column is-4">
						<VitalForm
							showVital={this.state.vitalIsOpen}
							onClose={this.toggleVitalForm}
						/>
					</div>
					<div className="column is-3">
						<StaffTasks />
					</div>
					<div className="column is-1">
						<NavBar
							toggleVitalForm={this.toggleVitalForm}
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default PatientPage;

