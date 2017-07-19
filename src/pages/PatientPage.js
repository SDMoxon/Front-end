import React from 'react';

import MedicalRecords from '../components/MedicalRecords';
import PatientSummary from '../components/PatientSummary';

// import './page_styles/LoginPage.css';

class PatientPage extends React.Component {
    render () {
        return (

 <div className="tile is-ancestor">
  <div className="tile is-vertical is-5">
    <div className="tile">
      <div className="tile is-parent is-vertical">
       <MedicalRecords/>
       <PatientSummary/>
      </div>
    </div>
    </div>
</div>
      
        );
    }
}

export default PatientPage;

