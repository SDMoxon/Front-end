import React from 'react';
import PropTypes from 'prop-types';

import './component_styles/UrineRes.css';

class UrineRes extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    const { showUrineRes, patient } = this.props;
    const { urine } = this.props.patient.testResult;

    if (showUrineRes && patient.testResult) {

      const urineKey = Object.keys(this.props.patient.testResult.urine).sort((a, b) => b - a)[0];

      return (
        <div className="compontent-UrineRes">
          <table className="table">
            <thead>
              <tr>
                <th id='urine-test-titles'>URINE INFO</th>
                <th id='urine-test-titles'>RESULT</th>
                <th id='urine-test-titles'>PERCENTAGE</th>
                <th id='urine-test-titles'>RANGE</th>
              </tr>
            </thead>
            <tbody>

              <tr>
                <th id='urine-res-keys'>Nitrate</th>
                <td id='urine-test-data' >{urine[urineKey]['nitrate']}</td>
                <td>
                  <progress
                    className="progress is-danger"
                    value={String(urine[urineKey]['nitrate'] / 11) * 100} max="100"
                  ></progress>
                </td>
                <td id='urine-test-data' >4-11</td>
              </tr>

              <tr>
                <th id='urine-res-keys'>Protein</th>
                <td id='urine-test-data' >{urine[urineKey]['protein']}</td>
                <td>
                  <progress
                    className="progress is-primary"
                    value={String((urine[urineKey]['protein'] / 165) * 100)}
                    max="100">30%
                  </progress>
                </td>
                <td id='urine-test-data'>115-165</td>
              </tr>

              <tr>
                <th id='urine-res-keys'>pH</th>
                <td id='urine-test-data' >{urine[urineKey]['pH']}</td>
                <td>
                  <progress
                    className="progress is-info"
                    value={String((urine[urineKey]['pH'] / 450) * 100)}
                    max="100"
                  ></progress></td>
                <td id='urine-test-data'>150-450</td>
              </tr>

              <tr>
                <th id='urine-res-keys'>Glucose</th>
                <td id='urine-test-data' >{urine[urineKey]['glucose']}</td>
                <td>
                  <progress
                    className="progress"
                    value={String((urine[urineKey]['glucose'] / 700) * 100)}
                    max="100"
                  ></progress>
                </td>
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
  showUrineRes: PropTypes.bool,
  patient: PropTypes.object.isRequired

};

