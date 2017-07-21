import React from 'react';

import './component_styles/PatientRecord.css';

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
        <h4 id='patientsName'className="name">Miss Sarah Fowler</h4>
        <h4 className="NHS-number"><strong>NHS Number:</strong> <span id='info'>125884KRT</span></h4>
        <h4  id='dob'className="DOB"><strong>D.O.B:</strong> <span id='info'>12/0/1978</span></h4>
        <p className="gender"><strong>Gender:</strong><span id='info'>Female</span></p>
        <p className="address"><strong id='address'>Address:</strong><span id='info'>15 Hazelnute Ave, Manchester, M12 4GE </span></p>
        <h4 className="contact-details"><strong>Phone Number:</strong><span id='info'> 0779561258</span></h4>
        <h4 className="next-of-kin"><strong>Next Of Kin:</strong> <span id='info'>Father (Mr Brian Fowler)</span></h4>
        <p className="GP-contact-details"><strong>GP:</strong> <span id='info'>Dr Trevello, The surgery, Kenwood Ave, M4 8YH</span></p>
        <h4 className="patient-occupation"><strong>Occupation:</strong> <span id='info'>Lorry Driver</span></h4>
        <h4 className="blood-type"><strong>Blood Type:</strong> <span id='info'>O negative</span></h4>
      </div>
    );
  } return (
      <div></div>
    );
  }
}

export default PatientRecord;


