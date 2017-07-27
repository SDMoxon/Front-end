import React from 'react';
import PropTypes from 'prop-types';
import BloodRes from './BloodRes';
import UrineRes from './UrineRes';

import './component_styles/TestResults.css';

class TestResults extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      bloodIsOpen: false,
      urineIsOpen: false
    };
    this.toggleBlood = this.toggleBlood.bind(this);
    this.toggleUrine = this.toggleUrine.bind(this);
  }

  toggleBlood () {
    this.setState({
      bloodIsOpen: !this.state.bloodIsOpen
    });
  }

  toggleUrine () {
    this.setState({
      toggleUrine: !this.state.toggleUrine
    });
  }

  render () {
    if (this.props.showTestRes) {
      return (
        <div className="compontent-TestResults">
          <nav className="level">
            <button id='bloods-button'
              className="level-item button is-success"
              onClick={this.toggleBlood}
            >Bloods
            </button>
            <button
              className="level-item button is-info"
              onClick={this.toggleUrine}
              id='urine-button'

            >Urine</button>
            <button
              className="level-item button is-danger"
              id='close-tests-button'
              onClick={this.props.onClose}
            >Close</button>
          </nav>
          <BloodRes
            showBloods={this.state.bloodIsOpen}
            onCloseBloods={this.toggleBlood}
            patient={this.props.patient}
          />
          <UrineRes
            showUrineRes={this.state.toggleUrine}
            onCloseUrine={this.toggleUrine}
            patient={this.props.patient} />
        </div>
      );
    }
    return (
      <div></div>
    );
  }
}

export default TestResults;

TestResults.propTypes = {
  onClose: PropTypes.func.isRequired,
  showTestRes: PropTypes.bool,
  patient: PropTypes.object.isRequired
};