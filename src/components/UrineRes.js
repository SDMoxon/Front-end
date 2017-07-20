import React from 'react';
import PropTypes from 'prop-types';

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
                <th>URINE INFO</th>
                <th>RESULT</th>
                <th>0-10</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>Nitrite</th>
                <td><progress className="progress" value="15" max="100">15%</progress></td>
                <td>4-11</td>
              </tr>
              <tr>
                <th>Protein</th>
                <td><progress className="progress is-primary" value="30" max="100">30%</progress></td>
                <td>115-165</td>
              </tr>
              <tr>
                <th>pH</th>
                <td><progress className="progress is-info" value="45" max="100">45%</progress></td>
                <td>150-450</td>
              </tr>
              <tr>
                <th>Glucose</th>
                <td><progress className="progress is-success" value="60" max="100">60%</progress></td>
                <td>200-900</td>
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

