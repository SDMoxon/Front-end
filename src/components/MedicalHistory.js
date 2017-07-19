import React from 'react';

import './component_styles/ProfileCard.css';

class MedicalHistory extends React.Component {
  render () {
    return (
      <div className="component-MedicalHistory">
        <h1 className="title">Patient Medical History:</h1>
        <h4 className="condition">Condition: Broken Foot</h4>
        <h4 className="">Date: October 1964</h4>
        <p className="treatment">Treatment</p>
        <p className="medication">Medication: Morphine</p>
        <p className="">Surgery: Yes- Hospital: St Marys - Surgeon: Patrick Fitz</p>
        <h4 className="">Notes: Allegic to Penacillin</h4>
        <h4 className="">Next Of Kin: Father (Mr Brian Fowler)</h4>
        <span> </span>
        <h1 className="title">Family History</h1>
        <p className=""> Relation: Father</p>
        <h4 className="">Condition: Diabeties</h4>
        <h4 className="">Date: 1964 - ongoing</h4>
        <p className="treatment">Treatment</p>
        <p className="medication">Medication: insulin 15mg</p>
        <p className="">Surgery: N/A</p>
        <h4 className="">Notes: N/A</h4>
      </div>
    );
  }
}

export default MedicalHistory;


