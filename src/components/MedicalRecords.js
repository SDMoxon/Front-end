import React from 'react';
import PatientRecord from './PatientRecord';
import MedicalHistory from './MedicalHistory';
import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import * as actions from '../actions/PatientPage.actions';
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
    this.toggleEdit = this.toggleEdit.bind(this);
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

  toggleEdit () {
    this.setState ({
      editIsToggled : !this.state.editIsToggled,
      patientRecordIsOpen: !this.state.patientRecordIsOpen
    });
  }

  closeBoth () {
    this.setState({
      medicalHistoryIsOpen: false,
      patientRecordIsOpen: false

    });
  }

  handleEdit (e) {
    e.preventDefault();
    this.setState({ 
      patientRecordIsOpen: !this.state.patientRecordIsOpen,
      editIsToggled: !this.state.editIsToggled 
    });

  }

  render () {
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
        {this.state.editIsToggled ? <EditPatientRecord
          patient={this.props.patient}
          loading={this.props.loading}
          toggleEdit={this.toggleEdit}

        /> :

          <PatientRecord
            showRecords={this.state.patientRecordIsOpen}
            onCloseRecords={this.togglePatientRecord}
            patient={this.props.patient}
            loading={this.props.loading}
            handleEdit={this.handleEdit}
          />}
        <MedicalHistory
          showMedHistory={this.state.medicalHistoryIsOpen}
          onCloseMedHistory={this.toggleMedicalHistory}
          patient={this.props.patient}
          loading={this.props.loading}
        />
        

      </div>
    );
  }
}

export default MedicalRecords;

MedicalRecords.propTypes = {
  patient: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  fetchPatientRecord: PropTypes.func
};
