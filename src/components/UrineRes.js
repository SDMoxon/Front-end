import React from 'react';
import PropTypes from 'prop-types';

import './component_styles/UrineRes.css';

class UrineRes extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    if (this.props.showUrineRes) {
      return (
        <div className="compontent-UrineRes">
          <table className="table">
            <thead>
              <tr>
                <th id='urine-test-titles'>URINE INFO</th>
                <th id='urine-test-titles'>RESULT</th>
                <th id='urine-test-titles'>0-10</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th id='urine-res-keys'>Nitrite</th>
                <td><progress className="progress is-danger" value="15" max="100">15%</progress></td>
                <td id='urine-test-data' >4-11</td>
              </tr>
              <tr>
                <th id='urine-res-keys'>Protein</th>
                <td><progress className="progress is-primary" value="30" max="100">30%</progress></td>
                <td id='urine-test-data'>115-165</td>
              </tr>
              <tr>
                <th id='urine-res-keys'>pH</th>
                <td><progress className="progress is-info" value="45" max="100">45%</progress></td>
                <td id='urine-test-data'>150-450</td>
              </tr>
              <tr>
                <th id='urine-res-keys'>Glucose</th>
                <td><progress className="progress is-success" value="60" max="100">60%</progress></td>
                <td id='urine-test-data'>200-900</td>
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

export default UrineRes;

UrineRes.propTypes = {
  showUrineRes: PropTypes.bool

};

