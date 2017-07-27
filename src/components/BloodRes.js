import React from 'react';
import PropTypes from 'prop-types';

import './component_styles/BloodRes.css';

class BloodRes extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    if (this.props.showBloods && this.props.patient.testResult) {
      const bloodsKey = Object.keys(this.props.patient.testResult.bloods).sort((a, b) => b - a)[0];
     
      return (
        <div className="compontent-bloodRes">
          <table className="table">
            <thead>
              <tr>
                <th id='blood-test-titles' >FULL BLOOD COUNT</th>
                <th id='blood-test-titles'>RESULT</th>
                <th id='blood-test-titles'>mm/hour</th>
                <th id='blood-test-titles'>0-10</th>
              </tr>
            </thead>
            <tbody>

              <tr>
                <th id='blood-test-keys'>White Cell Count</th>
                <td id='test-result'>{this.props.patient.testResult.bloods[bloodsKey]['white Cell Count']}</td>
                <td id='test-result'>10/L</td>
                <td id='test-result'>4-11</td>
              </tr>


              <tr>
                <th id='blood-test-keys'>Heamoglobin</th>
                <td id='test-result'>{this.props.patient.testResult.bloods[bloodsKey]['heamoglobin']}</td>
                <td id='test-result'>g/L</td>
                <td id='test-result'>115-165</td>
              </tr>
              <tr>
                <th id='blood-test-keys'>Platelets</th>
                <td id='test-result'> {this.props.patient.testResult.bloods[bloodsKey]['platelets']}</td>
                <td id='test-result'>10/L</td>
                <td id='test-result'>150-450</td>
              </tr>
              <tr>
                <th id='blood-test-keys'>Vitamin B12</th>
                <td id='test-result'>{this.props.patient.testResult.bloods[bloodsKey]['vitimin b12']}</td>
                <td id='test-result'>ng/L</td>
                <td id='test-result'>200-900</td>
              </tr>
            </tbody>
          </table>
        </div>
      );
    }
    return (
      <div></div>
    );
  }
}

export default BloodRes;

BloodRes.propTypes = {
  showBloods: PropTypes.bool,
  patient: PropTypes.object.isRequired

};

