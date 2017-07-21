import React from 'react';
import PatientRecord from './PatientRecord';
import MedicalHistory from './MedicalHistory';
import EditPatientRecord from './EditPatientRecord';
import './component_styles/MedicalRecords.css';

class MedicalRecords extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      patientRecordIsOpen: false,
      medicalHistoryIsOpen: false,
      editIsToggled: false
    };
    this.togglePatientRecord = this.togglePatientRecord.bind(this);
    this.toggleMedicalHistory = this.toggleMedicalHistory.bind(this);
    this.closeBoth = this.closeBoth.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  togglePatientRecord () {
    if (this.state.medicalHistoryIsOpen) {
      this.setState({
        medicalHistoryIsOpen: false,
        patientRecordIsOpen: !this.state.patientRecordIsOpen
      });
    } else {
      this.setState({
        patientRecordIsOpen: !this.state.patientRecordIsOpen
      });

    }
  }

  toggleMedicalHistory () {
    if (this.state.patientRecordIsOpen) {
      this.setState({
        patientRecordIsOpen: false,
        medicalHistoryIsOpen: !this.state.medicalHistoryIsOpen
      });
    } else {
      this.setState({
        medicalHistoryIsOpen: !this.state.medicalHistoryIsOpen
      });

    }
  }

  closeBoth () {
    this.setState({
      medicalHistoryIsOpen: false,
      patientRecordIsOpen: false

    });
  }

  handleEdit (e) {
    e.preventDefault();
    this.setState({ editIsToggled: !this.state.editIsToggled });

  }

  render () {
    console.log('cancel button clicked!');
    return (
      <div className="component-medical-MedicalRecords card" >
        <nav className="level">
          <button
            className="level-item button"
            onClick={this.togglePatientRecord}
          >PatientRecord
            </button>
          <button
            className="level-item button"
            onClick={this.toggleMedicalHistory}
          >MedicalHistory</button>
          <button
            className="level-item button"
            onClick={this.closeBoth}
          >Close</button>
        </nav>
        {this.state.editIsToggled ?  <EditPatientRecord/> : 
       
        <PatientRecord
          showRecords={this.state.patientRecordIsOpen}
          onCloseRecords={this.togglePatientRecord}
        />}
        <MedicalHistory
          showMedHistory={this.state.medicalHistoryIsOpen}
          onCloseMedHistory={this.toggleMedicalHistory}
        />
       <button id='edit' onClick={this.handleEdit}className="button is-danger">Edit...</button>

      </div>
    );
  }
}

export default MedicalRecords;