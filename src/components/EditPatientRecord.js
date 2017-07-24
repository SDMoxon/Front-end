import React from 'react';
import PropTypes from 'prop-types';

import './component_styles/EditPatientRecord.css';

class EditPatientRecord extends React.Component {
    constructor (props) {
        super(props);
        const patient = this.props.patient.personalDetails;
        this.state = {
            firstNames: patient.firstNames,
            NHSNumber: patient.NHSnumber,
            DOB: patient.demographics.dob.substring(0, 10),
            gender: patient.gender,
            addressLine1: 'TBC',
            addressLine2: 'TBC',
            nextKinName: patient.nextOfKin.name,
            nextKinRelationship: patient.nextOfKin.relationship,
            nextKinContact: patient.nextOfKin.contact,
            gpName: patient.GP.name,
            gpAddressLine1: patient.GP.surgery,
            gpCity: patient.GP.address,
            gpPostcode: ' TBC',
            occupation: patient.occupation,
            bloodType: patient.bloodType,
            cancelIsToggled: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleGender = this.handleGender.bind(this);
        this.handleBloodType = this.handleBloodType.bind(this);
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

    }

    render () {
        console.log(this.state.nextKinContact);
        return (
            <div className="component-EditPatientRecord">
                <div className="field">
                    <label className="label">NHS Number:</label>
                    <div className="control">
                        <input id='NHSNumber' className="NHSNumber input" onChange={this.handleChange} type="text" value={this.state.NHSNumber} />
                    </div>
                </div>
                <div className="field">
                    <label className="label">Name</label>
                    <div className="control">
                        <input id="firstNames" className="input" onChange={this.handleChange} type="text" placeholder="Name" value={this.state.firstNames} />
                    </div>
                </div>
                <div className="field">
                    <label className="label">D.0.B</label>
                    <div className="control">
                        <input id="DOB" className="input" onChange={this.handleChange} type="text" placeholder="DD/MM/YY" value={this.state.DOB} />

                    </div>
                </div>
                <div className="field">
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
                <div className="field">
                    <label className="label">Address line 1:</label>
                    <div className="control">
                        <input id='addressLine1' onChange={this.handleChange} className="input" type="text" placeholder="Address Line 1" value={this.state.addressLine1} />
                    </div>
                </div>
                <div className="field">
                    <label className="label">Address line 2:</label>
                    <div className="control">
                        <input id='addressLine2' className="input" onChange={this.handleChange} type="text" placeholder="Address Line 2" value={this.state.addressLine2} />
                    </div>
                </div>
                <div className="field">
                    <label className="label">City:</label>
                    <div className="control">
                        <input id='city' className="input" onChange={this.handleChange} type="text" placeholder="city" value={this.state.city} />
                    </div>
                </div>
                <div className="field">
                    <label className="label">Postcode:</label>
                    <div className="control">
                        <input id='postcode' className="input" onChange={this.handleChange} type="text" placeholder="postcode" value={this.state.postcode} />
                    </div>
                </div>
                <div className="field">
                    <label className="label">Contact Number:</label>
                    <div className="control">
                        <input id='contactNumber' className="input" onChange={this.handleChange} type="text" placeholder="contact number" value={this.state.contactNumber} />
                    </div>
                </div>
                <div className="field">
                    <label className="label">Next of kin:</label>
                    <label className="label">Relationship:</label>
                    <div className="control">
                        <input id='nextKinRelationship' className="input" onChange={this.handleChange} type="text" placeholder="relationship" value={this.state.nextKinRelationship} />
                    </div>
                    <label className="label">Name:</label>
                    <div className="control">
                        <input id='nextKinName' className="input" onChange={this.handleChange} type="text" placeholder="name" value={this.state.nextKinName} />
                    </div>
                </div>
                <label className="label">Contact number:</label>
                <div className="control">
                    <input id='nextKinContact' className="input" onChange={this.handleChange} type="text" placeholder="contact number" value={this.state.nextKinContact} />
                </div>

                <div className="field">
                    <label className="label">GP:</label>
                    <div className="control">
                        <input id='gpName' className="input" onChange={this.handleChange} type="text" placeholder="GP" value={this.state.gpName} />
                    </div>
                </div>
                <div className="field">
                    <label className="label">GP Address Line 1:</label>
                    <div className="control">
                        <input id='gpAddressLine1' className="input" onChange={this.handleChange} type="text" placeholder="GP" value={this.state.gpAddressLine1} />
                    </div>
                </div>
                <div className="field">
                    <label className="label">City:</label>
                    <div className="control">
                        <input id='gpCity' className="input" onChange={this.handleChange} type="text" placeholder="GP" value={this.state.gpCity} />
                    </div>
                </div>
                <div className="field">
                    <label className="label">Postcode:</label>
                    <div className="control">
                        <input id='gpPostcode' className="input" onChange={this.handleChange} type="text" placeholder="GP" value={this.state.gpPostcode} />
                    </div>
                </div>
                <div className="field">
                    <label className="label">Occupation:</label>
                    <div className="control">
                        <input id='occupation' className="input" onChange={this.handleChange} type="text" placeholder="occupation" value={this.state.occupation} />
                    </div>
                </div>
                <div className="field">
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
                <button id='submitButton' onSubmit={this.handleSubmit} type='submit' className="button is-primary">Submit</button>
                <button id='cancelButton' type='cancel' className="button is-danger">Cancel</button>
            </div>
        );
    }
}

export default EditPatientRecord;


EditPatientRecord.propTypes = {
    patient: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired
};
