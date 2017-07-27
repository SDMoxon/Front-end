import React from 'react';
import './component_styles/WardSearch.css';

import PropTypes from 'prop-types';

class WardSearch extends React.Component {
  render () {
    return (

      <div className="select is-multiple">
          {this.props.wardNames.map((ward) => {
            return <option className="card" key={ward} value={ward} onClick={this.props.handleClick}>{ward}</option>;
          })}
      </div>
    );
  }
}

export default WardSearch;

WardSearch.propTypes = {
	handleClick: PropTypes.func.isRequired,
  wardNames: PropTypes.string.isRequired
};
