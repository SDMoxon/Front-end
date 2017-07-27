import React from 'react';
import PropTypes from 'prop-types';
import SinglePatientSearch from './SinglePatientSearch';
import './component_styles/SearchBar.css';

import * as actions from '../actions/actions';
import { connect } from 'react-redux';

import _ from 'underscore';

class SearchBar extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			input: ''
		};
		this.handleChange = this.handleChange.bind(this);
		this.convert = this.convert.bind(this);
	}
	handleChange (e) {
		e.preventDefault();
		this.setState({ input: e.target.value });
		_.throttle(
			this.props.getPatientsByName(e.target.value)
			, 100);

	}
	convert (obj) {
		let result = [];
		for (let key in obj) {
			result.push(obj[key]);
		}
		return result;
	}
	render () {
		const searchPatients = Object.keys(this.props.search).map((key) => {
			return (<SinglePatientSearch key={this.props.search[key].personalDetails.NHSnumber} id={key} name={`${this.props.search[key].personalDetails.firstNames[0]} ${this.props.search[key].personalDetails.surname} `} ward={this.props.search[key].wardName} condition={this.props.search[key].currentMedicalState.currentCondition} />);
		});
		return (
			<div className="component-SearchBar">
				<form className='search-for-patient'>
					<div className='searchbox'><input onChange={this.handleChange} className="input" type="text" placeholder="Search..." /></div>
					{this.state.input.length > 0 ? <div id='dropdown' className='card scroll-box'>{searchPatients}</div> : <p></p>}
				</form>
			</div>
		);
	}
}


function mapStateToProps (state) {
	return {
		search: state.userPage.search
	};
}

function mapDispatchToProps (dispatch) {
	return {
		getPatientsByName: (name) => {
			dispatch(actions.fetchPatientsByName(name));
		}
	};
}


export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);


SearchBar.propTypes = {
	getPatientsByName: PropTypes.func.isRequired,
	search: PropTypes.object.isRequired
};
