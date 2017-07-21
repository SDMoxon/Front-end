import React from 'react';
import './component_styles/PatientSummary.css';

class PatientSummary extends React.Component {
  render () {
    return (
      <div className="component-PatientSummary card has-text-centered">
      
          <h1 id='name' className="title">Sarah Fowler </h1>
      
        
          <h2 className="condition"><span id='key'>Condition:</span> Chronic Obstructive Pulmonary Disease</h2>
          <h2 className="location"><span id='key'>Ward Name:</span> Heart Unit</h2>
    
      
      </div>
    );
  }
}

export default PatientSummary;


