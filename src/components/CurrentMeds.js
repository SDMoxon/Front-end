import React from 'react';
import PropTypes from 'prop-types';

import './component_styles/CurrentMeds.css';

class CurrentMeds extends React.Component {
  constructor (props) {
    super(props);

  }

  render () {
    if (this.props.showMeds && this.props.patient.medication) {
      return (
        <div className="compontent-currentMeds card">
          <p className="current-meds-title">Current Medication</p>
          <table className='MedsTable'>
            <thead>
              <tr>
                <th><abbr className='table-titles' title="Position">#</abbr></th>
                <th className='table-titles' >Medication</th>
                <th className='table-titles' >Dosage</th>
                <th className='table-titles' >Instructions</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(this.props.patient.medication).map((key, i) => {
                return (
                  [<tr key={i}>
                  <th className='med-keys'>{i + 1}</th>
									<td className='med-details'>{this.props.patient.medication[key].name}</td>
									<td className='med-details'>{this.props.patient.medication[key].dosageInfo}</td>
									<td className='med-details'>{this.props.patient.medication[key].instructions}</td>
								</tr>]

                );
              })}
            </tbody>
          </table>
          <button id='add-meds-button' className="button is-primary">Add</button>
          <button id='cancel-meds-button' className="button is-danger" onClick={this.props.onClose}>Cancel</button>
        </div>
      );
    }
    return (
      <div></div>
    );
  }
}

export default CurrentMeds;

CurrentMeds.propTypes = {
  onClose: PropTypes.func.isRequired,
  showMeds: PropTypes.bool,
  patient: PropTypes.object.isRequired
};
