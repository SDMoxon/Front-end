import React from 'react';

import MedicalRecords from '../components/MedicalRecords';
import PatientSummary from '../components/PatientSummary';
import VitalsDisplay from '../components/VitalsDisplay';
import StaffTasks from '../components/StaffTasks';
import NavBar from '../components/NavBar';
import VitalForm from '../components/VitalForm';
import CurrentMeds from '../components/CurrentMeds';

class PatientPage extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			vitalIsOpen: false,
			medsIsOpen : false
		};
		this.toggleVitalForm = this.toggleVitalForm.bind(this);
		this.toggleCurrentMeds = this.toggleCurrentMeds.bind(this);
	}

	toggleVitalForm () {
		this.setState({
			vitalIsOpen: !this.state.vitalIsOpen
		});
	}

		toggleCurrentMeds () {
		this.setState({
			medsIsOpen: !this.state.medsIsOpen
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
						<CurrentMeds
							showMeds={this.state.medsIsOpen}
							onClose={this.toggleCurrentMeds}
						/>
					</div>
					<div className="column is-3">
						<StaffTasks />
					</div>
					<div className="column is-1">
						<NavBar
							toggleVitalForm={this.toggleVitalForm}
							toggleCurrentMeds={this.toggleCurrentMeds}
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default PatientPage;

