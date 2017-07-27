import React from 'react';

import MedicalRecords from '../components/MedicalRecords';
import PatientSummary from '../components/PatientSummary';
import VitalsDisplay from '../components/VitalsDisplay';
import StaffTasks from '../components/StaffTasks';
import NavBar from '../components/NavBar';
import VitalForm from '../components/VitalForm';
import CurrentMeds from '../components/CurrentMeds';
import TestResults from '../components/TestResults';
import './page_styles/PatientPage.css';
import { connect } from 'react-redux';
import * as actions from '../actions/PatientPage.actions';
import Spinner from 'react-spinkit';
import PropTypes from 'prop-types';

class PatientPage extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			vitalIsOpen: false,
			medsIsOpen: true,
			testResIsOpen: true,
			navBarIsOpen: false
		};
		this.toggleVitalForm = this.toggleVitalForm.bind(this);
		this.toggleCurrentMeds = this.toggleCurrentMeds.bind(this);
		this.toggleTestResults = this.toggleTestResults.bind(this);
		this.toggleNavBar = this.toggleNavBar.bind(this);
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

	toggleTestResults () {
		this.setState({
			testResIsOpen: !this.state.testResIsOpen
		});
	}
	toggleNavBar () {
		this.setState({
			navBarIsOpen: !this.state.navBarIsOpen
		});
	}
	componentDidMount () {
		const { patient_id } = this.props.match.params;
		this.props.fetchPatientRecord(patient_id);
	}

	render () {
		const { loading, patient } = this.props;
		const { patient_id } = this.props.match.params;
		if (loading || !patient) {
			return (<div className="patient-page">
				<Spinner name='ball-scale-ripple-multiple' color='#494949' fadeIn='none' />
			</div>);
		}

		else if (patient) {
			return (<div className="patient-page">
				<div className="columns">
					<div className="column is-4">
						<MedicalRecords
							patient={this.props.patient}
							loading={this.props.loading}
						/>
						<PatientSummary
							patient={this.props.patient}
							loading={this.props.loading}
						/>
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
							patient={this.props.patient}
							loading={this.props.loading}
						/>
						<TestResults
							showTestRes={this.state.testResIsOpen}
							onClose={this.toggleTestResults}
							patient={this.props.patient}
						/>
					</div>
					<div className="column is-3">
						<StaffTasks
							patientId={patient_id}
							patient={this.props.patient}
						/>
					</div>
					<div id='nav-col' className="column is-1">
						<i
							className="fa fa-bars"
							onClick={this.toggleNavBar}
						></i>
						<NavBar
							toggleVitalForm={this.toggleVitalForm}
							toggleCurrentMeds={this.toggleCurrentMeds}
							toggleTestResults={this.toggleTestResults}
							showNavBar={this.state.navBarIsOpen}
						/>
					</div>
				</div>
			</div>);
		}
	}
}

function mapDispatchToProps (dispatch) {
	return {
		fetchPatientRecord: (patient_id) => {
			dispatch(actions.fetchPatientRecord(patient_id));
		}
	};
}

function mapStateToProps (state) {

	return {
		patient: state.patientPage.patient,
		loading: state.patientPage.loading
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(PatientPage);

PatientPage.propTypes = {
	loading: PropTypes.bool.isRequired,
	patient: PropTypes.object.isRequired,
	fetchPatientRecord: PropTypes.func.isRequired,
	match: PropTypes.object.isRequired
};

