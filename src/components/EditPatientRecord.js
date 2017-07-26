import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../actions/PatientPage.actions';

import './component_styles/EditPatientRecord.css';

class EditPatientRecord extends React.Component {
	constructor (props) {
		super(props);
		const patient = this.props.patient.personalDetails;
		this.state = {
			firstNames: patient.firstNames,
			surname: patient.surname,
			NHSNumber: patient.NHSnumber,
			DOB: patient.demographics.dob.substring(0, 10),
			gender: patient.gender,
			address: patient.address,
			email: patient.email,
			nextKinName: patient.nextOfKin.name,
			nextKinRelationship: patient.nextOfKin.relationship,
			nextKinContact: patient.nextOfKin.contact,
			gpName: patient.GP.name,
			gpSurgery: patient.GP.surgery,
			gpAddress: patient.GP.address,
			occupation: patient.occupation,
			bloodType: patient.bloodType,
			cancelIsToggled: false
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleGender = this.handleGender.bind(this);
		this.handleBloodType = this.handleBloodType.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleNameChange = this.handleNameChange.bind(this);
	}

	handleNameChange (e) {
		this.setState({
			firstNames: e.target.value.split(' ')
		});
	}
	handleChange (e) {
		e.preventDefault();
		let key = e.target.id;
		this.setState({
			[key]: e.target.value,
		});
	}
	handleGender (e) {
		e.preventDefault();
		this.setState({
			gender: e.target.value
		});
	}
	handleBloodType (e) {
		e.preventDefault();
		this.setState({
			bloodType: e.target.value
		});
	}
	handleSubmit () {
		const newData = {
			GP: {
				address: this.state.gpCity,
				name: this.state.gpName,
				surgery: this.state.gpAddressLine1
			},
			NHSnumber: this.state.NHSNumber,
			address: this.state.address,
			bloodType: this.state.bloodType,
			demographics: {
				alcohol: {
					unitsPerDay: this.props.patient.personalDetails.demographics.alcohol.unitsPerDay,
					unitsPerWeek: this.props.patient.personalDetails.demographics.alcohol.unitsPerWeek,
					use: this.props.patient.personalDetails.demographics.alcohol.use
				},
				dob: this.state.DOB,
				ethnicity: this.props.patient.personalDetails.demographics.ethnicity,
				gender: this.state.gender,
				language: this.props.patient.personalDetails.demographics.language,
				race: this.props.patient.personalDetails.demographics.race,
				smoking: {
					status: this.props.patient.personalDetails.demographics.smoking.status,
					unitsPerDay: this.props.patient.personalDetails.demographics.smoking.unitsPerDay,
					unitsPerWeek: this.props.patient.personalDetails.demographics.smoking.unitsPerWeek
				}
			},
			email: this.state.email,
			firstNames: this.state.firstNames,
			nextOfKin: {
				contact: this.state.nextKinContact,
				name: this.state.nextKinName,
				relationship: this.state.nextKinRelationship
			},
			occupation: this.state.occupation,
			surname: this.state.surname
		};
		this.props.updatePatientRecord(newData);
		this.props.toggleEdit();

	}

	render () {
		if (this.props.patient.personalDetails) {
			return (
				<div className="component-EditPatientRecord ">

					<div className="patientInfo columns">

						<div className="field column">
							<label className="label">First Name(s)</label>
							<div className="control">
								<input id="firstNames" className="input" onChange={this.handleNameChange} type="text" placeholder="Name" value={this.state.firstNames.join(' ')} />
							</div>
						</div>

						<div className="field column">
							<label className="label">Surname</label>
							<div className="control">
								<input id="surname" className="input" onChange={this.handleChange} type="text" placeholder="Name" value={this.state.surname} />
							</div>
						</div>

					</div>
					<div className="columns">
						<div className="field column">
							<label className="label">D.0.B</label>
							<div className="control">
								<input id="DOB" className="input" onChange={this.handleChange} type="text" placeholder="DD/MM/YY" value={this.state.DOB} />
							</div>
						</div>

						<div className="field column">
							<label className="label">Gender</label>
							<div className="control">
								<div className="select">
									<select onChange={this.handleGender} value={this.state.gender}>
										<option value='Male'>Male</option>
										<option value='Female'>Female</option>
										<option value='Other'>Other</option>
									</select>
								</div>
							</div>
						</div>
						<div className="field column">
							<label className="label">NHS Number:</label>
							<div className="control">
								<input id='NHSNumber' className="NHSNumber input" onChange={this.handleChange} type="text" value={this.state.NHSNumber} />
							</div>
						</div>

						<div className="field column">
							<label className="label">Blood Type</label>
							<div className="control">
								<div className="select">
									<select onChange={this.handleBloodType} value={this.state.bloodType}>
										<option value='A +'>A +</option>
										<option value='A -'>A -</option>
										<option value='B +'>B +</option>
										<option value='B -'>B -</option>
										<option value='O +'>O +</option>
										<option value='O -'>O -</option>
										<option value='AB +'>AB +</option>
										<option value='AB -'>AB -</option>
									</select>
								</div>
							</div>
						</div>

					</div>

					<div className="field">
						<label className="label">Address:</label>
						<div className="control">
							<input id='address' onChange={this.handleChange} className="input" type="text" placeholder="Address" value={this.state.address} />
						</div>
					</div>


					<div className="field">
						<label className="label">Contact Email:</label>
						<div className="control">
							<input id='contactEmail' className="input" onChange={this.handleChange} type="text" placeholder="contact number" value={this.state.email} />
						</div>
					</div>

					<div className="field">
						<label className="label">Occupation:</label>
						<div className="control">
							<input id='occupation' className="input" onChange={this.handleChange} type="text" placeholder="occupation" value={this.state.occupation} />
						</div>
					</div>


					<div id='NOK' className="field columns">
						<div className="column">
							<label className="label">Next of kin (Name):</label>
							<div className="control">
								<input id='nextKinName' className="input" onChange={this.handleChange} type="text" placeholder="name" value={this.state.nextKinName} />
							</div>
						</div>
						<div className="column">
							<label className="label">Next of kin (Relationship):</label>
							<div className="control">
								<input id='nextKinRelationship' className="input" onChange={this.handleChange} type="text" placeholder="relationship" value={this.state.nextKinRelationship} />
							</div>
						</div>


					</div>

					<label className="label">Next of kin (Contact number):</label>
					<div className="control">
						<input id='nextKinContact' className="input" onChange={this.handleChange} type="text" placeholder="contact number" value={this.state.nextKinContact} />
					</div>

					<div className="columns">
						<div className="field column">
							<label id='GPName' className="label">GP Name:</label>
							<div className="control">
								<input id='gpName' className="input" onChange={this.handleChange} type="text" placeholder="GP" value={this.state.gpName} />
							</div>
						</div>

						<div className="field column">
							<label id='GPSurgery' className="label">GP Surgery:</label>
							<div className="control">
								<input id='gpSurgery' className="input" onChange={this.handleChange} type="text" placeholder="GP" value={this.state.gpSurgery} />
							</div>
						</div>
					</div>

					<div className="field">
						<label className="label">GP Address:</label>
						<div className="control">
							<input id='gpAddress' className="input" onChange={this.handleChange} type="text" placeholder="GP" value={this.state.gpAddress} />
						</div>
					</div>


					<button id='submitButton' onClick={this.handleSubmit} type='submit' className="button is-primary">Submit</button>
					<button id='cancelButton' onClick={this.props.toggleEdit} type='cancel' className="button is-danger">Cancel</button>
				</div>
			);

		}

		return (
			<div></div>
		);
	}
}

function mapDispatchToProps (dispatch) {
	return {
		updatePatientRecord: (newData) => {
			dispatch(actions.updatePatientRecord(newData));
		}
	};
}


export default connect(null, mapDispatchToProps)(EditPatientRecord);


EditPatientRecord.propTypes = {
	patient: PropTypes.object.isRequired,
	loading: PropTypes.bool.isRequired,
	toggleEdit: PropTypes.func.isRequired,
	updatePatientRecord: PropTypes.func.isRequired
};
