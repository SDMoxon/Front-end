import React from 'react';
import PropTypes from 'prop-types';

import './component_styles/PatientRecord.css';

import Spinner from 'react-spinkit';

class PatientRecord extends React.Component {
  constructor (props) {
    super(props);
    this.state = {

    };
  }

  render () {
    if (this.props.showRecords) {
      return (
      <div className="component-PatientRecord">
        {this.props.loading ? (
          <Spinner name='ball-scale-ripple-multiple' color='#494949' fadeIn='none'/>
        ) : (
          <div className="test">
        <h4 id='patientsName'className="name"> <strong className='info-titles' >Name: </strong>{this.props.patient.personalDetails.firstNames[0]} {this.props.patient.personalDetails.surname}</h4>
        <h4 className="NHS-number"><strong className='info-titles'>NHS Number: </strong> <span id='info'>{this.props.patient.personalDetails.NHSnumber}</span></h4>
        <h4  id='dob'className="DOB"><strong className='info-titles'>D.O.B: </strong> <span id='info'>{this.props.patient.personalDetails.demographics.dob.substring(0,10)}</span></h4>
        <p className="gender"><strong className='info-titles'>Gender: </strong><span id='info'>{this.props.patient.personalDetails.demographics.gender}</span></p>
        <p className="address"><strong className='info-titles' id='address'>Address: </strong><span id='info'> {this.props.patient.personalDetails.address}</span></p>
        <h4 className="contact-details"><strong className='info-titles'>Contact Email: </strong><span id='info'> {this.props.patient.personalDetails.email}</span></h4>
        <h4 className="patient-occupation"><strong className='info-titles'>Occupation:</strong> <span id='info'>{this.props.patient.personalDetails.occupation}</span></h4>
        <h4 className="blood-type"><strong className='info-titles'>Blood Type:</strong> <span id='info'>{this.props.patient.personalDetails.bloodType}</span></h4>
        <h4 className="next-of-kin"><strong className='info-titles'>Next Of Kin: </strong> <span id='info'>{this.props.patient.personalDetails.nextOfKin.relationship} - {this.props.patient.personalDetails.nextOfKin.name}</span></h4>
        <p className="GP-contact-details"><strong className='info-titles'>GP:</strong> <span id='info'> Dr {this.props.patient.personalDetails.GP.name} - {this.props.patient.personalDetails.GP.surgery} - {this.props.patient.personalDetails.GP.address}</span></p>
        <button id='edit' onClick={this.props.handleEdit} className="button is-danger">Edit...</button>
</div>
        )}
      </div>
    );
  } return (
      <div></div>
    );
  }

}

export default PatientRecord;

PatientRecord.propTypes = {
  showRecords: PropTypes.bool.isRequired,
  patient:  PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  handleEdit: PropTypes.func.isRequired
};

