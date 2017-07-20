import React from 'react';
import PropTypes from 'prop-types';

class BloodRes extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    if (this.props.showBloods) {
      return (
        <div className="compontent-bloodRes">
          <table className="table">
            <thead>
              <tr>
                <th>FULL BLOOD COUNT</th>
                <th>RESULT</th>
                <th>mm/hour</th>
                <th>0-10</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>White Cell Count</th>
                <td>10.0</td>
                <td>10/L</td>
                <td>4-11</td>
              </tr>
              <tr>
                <th>Heamoglobin</th>
                <td>129</td>
                <td>g/L</td>
                <td>115-165</td>
              </tr>
              <tr>
                <th>Platelets</th>
                <td>381</td>
                <td>10/L</td>
                <td>150-450</td>
              </tr>
              <tr>
                <th>Vitamin B12</th>
                <td>525</td>
                <td>ng/L</td>
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

export default BloodRes;

BloodRes.propTypes = {
  showBloods: PropTypes.bool

};

