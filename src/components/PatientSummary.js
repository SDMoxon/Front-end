import React from 'react';


class PatientSummary extends React.Component {
    render () {
        return (
          <div className="component-PatientSummary card">
            <div className="card-header">
              <h1 className="card-header-title">Sarah Fowler <span></span> <i className="fa fa-exclamation-triangle" aria-hidden="true"></i></h1>
            </div>
            <div className="card-content">
              <h2 className="condition">Condition: Chronic Obstructive Pulmonary Disease</h2>
              <h2 className="location">Ward Name: Heart Unit</h2>
              <h2 className="bed">Bed: Bed 4</h2>
            </div>
          </div>

        );
    }
}

export default PatientSummary;


