import React from 'react';

import MedicalRecords from '../components/MedicalRecords';
import PatientSummary from '../components/PatientSummary';
import VitalsDisplay from '../components/VitalsDisplay';
import StaffTasks from '../components/StaffTasks';
import NavBar from '../components/NavBar';



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
     <StaffTasks/>

    </div>
       <div className="column is-1">
           <NavBar/>
     

    </div>

</div>
      
        );
    }
}

export default PatientPage;

