import React from 'react';
import './component_styles/PatientSummary.css';
import Spinner from 'react-spinkit';
import PropTypes from 'prop-types';

class PatientSummary extends React.Component {
  constructor (props) {
    super(props);
    this.state = {};
  }
  render () {
      if (this.props.patient.personalDetails) {

    return (
      <div className="component-PatientSummary card has-text-centered">
        
          {this.props.loading && (
          <Spinner name='pacman' color='blue' fadeIn='none'/>
        )}
      
          <h1 id='name' className="title">{this.props.patient.personalDetails.firstNames[0] + ' ' + this.props.patient.personalDetails.surname}</h1>
      
        
          <h2 className="condition"><span id='key'>Condition:</span>{' ' + this.props.patient.currentMedicalState.currentCondition}</h2>
          <h2 className="location"><span id='key'>Ward Name:</span> {this.props.patient.wardName}</h2>
    
      
      </div>
    );
    } return (
      <div></div>
    );
      }
  }


export default PatientSummary;

PatientSummary.propTypes = {
  patient: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired
};


