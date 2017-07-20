import React from 'react';
import './component_styles/WardSearch.css';

class WardSearch extends React.Component {
  render () {
    return (

      <div className="select is-multiple">
        <select id='multi-select' multiple size='8' >
          <option value="Albert Ward">Albert Ward</option>
          {this.props.wardNames.map((ward) => {
            return <option key={ward} value={ward} onClick={this.props.handleClick}>{ward}</option>;
          })}
    
        </select>
      </div>
    );
  }
}

export default WardSearch;

