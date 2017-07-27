import React from 'react';
import './component_styles/WardSearch.css';

import PropTypes from 'prop-types';

class WardSearch extends React.Component {
  render () {
    return (
      
    

      <div className="is-multiple">
          {this.props.wardNames.map((ward) => {
            return <option id='eachWard' className="card" key={ward} value={ward} onClick={this.props.handleClick}>{ward}</option>;
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
