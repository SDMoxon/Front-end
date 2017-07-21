import React from 'react';
import './component_styles/PatientSummary.css';

class PatientSummary extends React.Component {
  render () {
    return (
      <div className="component-PatientSummary card">
        <div className="card-header">
          <h1 className="card-header-title has-text-centered">Sarah Fowler </h1>
          <i className="fa fa-exclamation-triangle is-paddingless is-marginless" aria-hidden="true"></i>
        </div>
        <div className="card-content">
          <h2 className="condition">Condition: Chronic Obstructive Pulmonary Disease</h2>
          <h2 className="location">Ward Name: Heart Unit</h2>
        </div>
      </div>
    );
  }
}

export default PatientSummary;


