import React from 'react';

import './component_styles/ProfileCard.css';

class PatientRecord extends React.Component {
    render () {
        return (
          <div className="component-PatientRecord">
            <h4 className="name">Patient Name: Miss Sarah Fowler</h4>
            <h4 className="DOB">D.O.B: 12/0/1978</h4>
            <p className="gender">Gender: Female</p>
            <p className="address">Address: 15 Hazelnute Ave, Manchester, M12 4GE
            </p>
            <h4 className="contactDetails">Phone Number: 0779561258</h4>
            <h4 className="next-of-kin">Next Of Kin: Father (Mr Brian Fowler)</h4>
            <h4 className="NHS-Number">NHS Number: 125884KRT</h4>
            <p className="GP-contactDetails">GP: Dr Trevello, The surgery, Kenwood Ave, M4 8YH</p>
            <h4 className="patient-occupation">Occupation: Lorry Driver</h4>
            <h4 className="blood-type">Blood Type: O negative</h4>
          </div>
        );
    }
}

export default PatientRecord;


