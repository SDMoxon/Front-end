import React from 'react';

import MedicalRecords from '../components/MedicalRecords';
import PatientSummary from '../components/PatientSummary';
import VitalsDisplay from '../components/VitalsDisplay';
import NavBar from '../components/NavBar';

// import './page_styles/LoginPage.css';

class PatientPage extends React.Component {
    render () {
        return (

 <div className="columns">
  <div className="column is-4">
       <MedicalRecords/>
       <PatientSummary/>
       <VitalsDisplay/>

    </div>
     <div className="column is-4">
     

    </div>
     <div className="column is-3">
     

    </div>
       <div className="column is-1">
           <NavBar/>
     

    </div>

</div>
      
        );
    }
}

export default PatientPage;

