import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../actions/PatientPage.actions';

import './component_styles/EditPatientRecord.css';

class EditPatientRecord extends React.Component {
	constructor (props) {
		super(props);

		const { personalDetails } = this.props.patient;

		this.state = {
			firstNames: personalDetails.firstNames,
			surname: personalDetails.surname,
			NHSNumber: personalDetails.NHSnumber,
			DOB: personalDetails.demographics.dob.substring(0, 10),
			gender: personalDetails.gender,
			address: personalDetails.address,
			email: personalDetails.email,
			nextKinName: personalDetails.nextOfKin.name,
			nextKinRelationship: personalDetails.nextOfKin.relationship,
			nextKinContact: personalDetails.nextOfKin.contact,
			gpName: personalDetails.GP.name,
			gpSurgery: personalDetails.GP.surgery,
			gpAddress: personalDetails.GP.address,
			occupation: personalDetails.occupation,
			bloodType: personalDetails.bloodType,
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

		const { gpSurgery, gpName, gpAddress, NHSNumber, address, bloodType, occupation, surname } = this.state;
		const { DOB, gender, firstNames, email, nextKinContact, nextKinName, nextKinRelationship } = this.state;
		const { alcohol, ethnicity, language, race, smoking } = this.props.patient.personalDetails.demographics;
		const { patient_id } = this.props;
		const newData = {
			GP: {
				address: gpAddress,
				name: gpName,
				surgery: gpSurgery
			},
			NHSnumber: NHSNumber,
			address: address,
			bloodType: bloodType,
			demographics: {
				alcohol: {
					unitsPerDay: alcohol.unitsPerDay,
					unitsPerWeek: alcohol.unitsPerWeek,
					use: alcohol.use
				},
				dob: DOB,
				ethnicity: ethnicity,
				gender: gender,
				language: language,
				race: race,
				smoking: {
					status: smoking.status,
					unitsPerDay: smoking.unitsPerDay,
					unitsPerWeek: smoking.unitsPerWeek
				}
			},
			email: email,
			firstNames: firstNames,
			nextOfKin: {
				contact: nextKinContact,
				name: nextKinName,
				relationship: nextKinRelationship
			},
			occupation: occupation,
			surname: surname
		};
		this.props.updatePatientRecord(newData, patient_id);
		this.props.toggleEdit();
	}

	render () {
		const { gpSurgery, gpName, gpAddress, NHSNumber, address, bloodType, occupation, surname } = this.state;
		const { DOB, gender, firstNames, email, nextKinName, nextKinRelationship } = this.state;
		const { patient, toggleEdit } = this.props;

		if (patient.personalDetails) {
			return (
				<div className="component-EditPatientRecord ">

					<div className="patientInfo columns">

						<div className="field column">
							<label className="label">First Name(s)</label>
							<div className="control">
								<input
									id="firstNames"
									className="input"
									onChange={this.handleNameChange}
									type="text" placeholder="Name"
									value={firstNames.join(' ')}
								/>
							</div>
						</div>

						<div className="field column">
							<label className="label">Surname</label>
							<div className="control">
								<input
									id="surname"
									className="input"
									onChange={this.handleChange}
									type="text" placeholder="Name"
									value={surname} />
							</div>
						</div>

					</div>
					<div className="columns">
						<div className="field column">
							<label className="label">D.0.B</label>
							<div className="control">
								<input
									id="DOB"
									className="input"
									onChange={this.handleChange}
									type="text"
									placeholder="DD/MM/YY"
									value={DOB} />
							</div>
						</div>

						<div className="field column">
							<label className="label">Gender</label>
							<div className="control">
								<div className="select">
									<select onChange={this.handleGender} value={gender}>
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
								<input
									id='NHSNumber'
									className="NHSNumber input"
									onChange={this.handleChange}
									type="text" value={NHSNumber}
								/>
							</div>
						</div>

						<div className="field column">
							<label className="label">Blood Type</label>
							<div className="control">
								<div className="select">
									<select onChange={this.handleBloodType} value={bloodType}>
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
							<input
								id='address'
								onChange={this.handleChange}
								className="input"
								type="text"
								placeholder="Address"
								value={address} />
						</div>
					</div>

					<div className="field">
						<label className="label">Contact Email:</label>
						<div className="control">
							<input
								id='contactEmail'
								className="input"
								onChange={this.handleChange}
								type="text"
								placeholder="contact number"
								value={email} />
						</div>
					</div>

					<div className="field">
						<label className="label">Occupation:</label>
						<div className="control">
							<input
								id='occupation'
								className="input"
								onChange={this.handleChange}
								type="text"
								placeholder="occupation"
								value={occupation} />
						</div>
					</div>

					<div id='NOK' className="field columns">
						<div className="column">
							<label className="label">Next of kin (Name):</label>
							<div className="control">
								<input
									id='nextKinName'
									className="input"
									onChange={this.handleChange}
									type="text"
									placeholder="name"
									value={nextKinName} />
							</div>
						</div>

						<div className="column">
							<label className="label">Next of kin (Relationship):</label>
							<div className="control">
								<input
									id='nextKinRelationship'
									className="input"
									onChange={this.handleChange}
									type="text"
									placeholder="relationship"
									value={nextKinRelationship}
								/>
							</div>
						</div>
					</div>

					<label className="label">Next of kin (Contact number):</label>
					<div className="control">
						<input
							id='nextKinContact'
							className="input"
							onChange={this.handleChange}
							type="text"
							placeholder="contact number"
							value={this.state.nextKinContact}
						/>
					</div>

					<div className="columns">
						<div className="field column">
							<label id='GPName' className="label">GP Name:</label>
							<div className="control">
								<input
									id='gpName'
									className="input"
									onChange={this.handleChange}
									type="text"
									placeholder="GP"
									value={gpName}
								/>
							</div>
						</div>

						<div className="field column">
							<label id='GPSurgery' className="label">GP Surgery:</label>
							<div className="control">
								<input
									id='gpSurgery'
									className="input"
									onChange={this.handleChange}
									type="text"
									placeholder="GP"
									value={gpSurgery} />
							</div>
						</div>
					</div>

					<div className="field">
						<label className="label">GP Address:</label>
						<div className="control">
							<input
								id='gpAddress'
								className="input"
								onChange={this.handleChange}
								type="text"
								placeholder="GP"
								value={gpAddress} />
						</div>
					</div>

					<button
						id='submitButton'
						onClick={this.handleSubmit}
						type='submit'
						className="button is-primary"
					>Submit
					</button>

					<button
						id='cancelButton'
						onClick={toggleEdit}
						type='cancel'
						className="button is-danger"
					>Cancel
					</button>
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
		updatePatientRecord: (newData, id) => {
			dispatch(actions.updatePatientRecord(newData, id));
		}
	};
}


export default connect(null, mapDispatchToProps)(EditPatientRecord);


EditPatientRecord.propTypes = {
	patient: PropTypes.object.isRequired,
	loading: PropTypes.bool.isRequired,
	toggleEdit: PropTypes.func.isRequired,
	updatePatientRecord: PropTypes.func.isRequired,
	patient_id: PropTypes.string.isRequired
};
