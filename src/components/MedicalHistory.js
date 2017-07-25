import React from 'react';
import PropTypes from 'prop-types';

import './component_styles/MedicalHistory.css';

class MedicalHistory extends React.Component {
  constructor (props) {
    super(props);
  }
  render () {
    function getMedHistory (obj, data, bool, data2) {
      if (bool) {
        for (let key in obj) {
          for (let innerKey in obj[key]) {
            if (innerKey === data2) {
              for (let lastKey in obj[key][innerKey]) {
                return obj[key][innerKey][lastKey][data];
              }
            }
          }
        }
        } else {

          for (let key in obj) {
            return obj[key][data];
          }
        }
      
    }
      if (this.props.showMedHistory && this.props.patient.personalDetails) {

        return (
          <div className="component-MedicalHistory">
            <h1 id='medHistory-title' className="title"><strong>Patient Medical History</strong></h1>
            <p className="condition"><strong className='medHistory-title'>Condition: </strong><span className='medHistory-info'>{getMedHistory(this.props.patient.medicalHistory.patientHistory, 'name')}</span></p>
            <p className=""><strong className='medHistory-title'>Date: </strong><span className='medHistory-info'>{getMedHistory(this.props.patient.medicalHistory.patientHistory, 'date')}</span></p>
            <p className="medication"><strong className='medHistory-title'>Medication: </strong> <span className='medHistory-info'>{getMedHistory(this.props.patient.medicalHistory.patientHistory, 'name', true, 'medication')}</span></p>
            <p className=""><strong className='medHistory-title'>Surgery: </strong><span className='medHistory-info'>{getMedHistory(this.props.patient.medicalHistory.patientHistory, 'treatement').surgeries.hospital}</span></p>
            <p className=""><strong className='medHistory-title'>Surgeon: </strong><span className='medHistory-info'>{getMedHistory(this.props.patient.medicalHistory.patientHistory, 'treatement').surgeries.surgeon}</span></p>
            <p className=""><strong className='medHistory-title'>Notes: </strong> <span className='medHistory-info'>Allegic to Penacillin</span></p>

            <span> </span>
            <h1 id='familyHistory-title' className="title"><strong>Family History</strong></h1>
            <p className=""> <strong className='medHistory-title'>Name: </strong> <span className='medHistory-info'>{getMedHistory(this.props.patient.medicalHistory.familyHistory, 'name')}</span></p>
            <p className=""> <strong className='medHistory-title'>Relation: </strong> <span className='medHistory-info'>{getMedHistory(this.props.patient.medicalHistory.familyHistory, 'relationship')}</span></p>
            <p className=""><strong className='medHistory-title'>Condition:</strong> <span className='medHistory-info'>{getMedHistory(this.props.patient.medicalHistory.familyHistory, 'condition')}</span></p>
            <p className=""><strong className='medHistory-title'>Date: </strong> <span className='medHistory-info'>{getMedHistory(this.props.patient.medicalHistory.familyHistory, 'date')}</span></p>
          </div>
        );
      }
      return (
        <div></div>
      );
    }
  }

  export default MedicalHistory;

  MedicalHistory.propTypes = {
    showMedHistory: PropTypes.bool.isRequired,
    patient: PropTypes.object.isRequired
  };
