import React from 'react';

import SinglePatientSearch from './SinglePatientSearch'
import './component_styles/SearchBar.css';

class SearchBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			input: '',
			patients: {
				'p1': {
					'name': 'Harry potter',
					'ward': 'Nightingale',
					'condition': 'Broken Wand',
					'NHSNumber': 'NHS3472813'
				},
				'p2': {
					'name': 'Jessica Hughs',
					'ward': 'A&E',
					'condition': 'Foot sprain',
					'NHSNumber': 'NHS3474233'
				},
				'p3': {
					'name': 'Harry Fletcher',
					'ward': 'ICU',
					'condition': 'Heart Attack',
					'NHSNumber': 'NHS7632813'
				},
				'p4': {
					'name': 'Prince Harry',
					'ward': 'Fracture',
					'condition': 'Fractured Hand',
					'NHSNumber': 'NH772472813'
				},
				'p5': {
					'name': 'Harry Gordon',
					'ward': 'Fracture',
					'condition': 'Fractured Hand',
					'NHSNumber': 'NH772472813'
				},
				'p6': {
					'name': 'Harry Fiztgerald',
					'ward': 'Fracture',
					'condition': 'Fractured Hand',
					'NHSNumber': 'NH772472813'
				},
				'p7': {
					'name': 'Harry Henman',
					'ward': 'Fracture',
					'condition': 'Fractured Hand',
					'NHSNumber': 'NH772472813'
				}
			}
		}
		this.handleChange = this.handleChange.bind(this);
		this.filterNames = this.filterNames.bind(this);
	}
	handleChange (e) {
		e.preventDefault();

		this.setState({ input: e.target.value });
	}
	filterNames (obj, str) {
		let result = []
		for (let key in obj) {
			var regexp = new RegExp(str, 'gi');
			if (regexp.test(obj[key].name)) {
				result.push(obj[key]);
			}
		}
		return result;
	

	}
	render() {
		const searchPatients = this.filterNames(this.state.patients, this.state.input).map((patient) => {
			return (<SinglePatientSearch key={patient.name} name={patient.name} ward={patient.ward} condition={patient.condition} />)
		})
		return (
			<div className="component-SearchBar">
				<form className='search-for-patient'>
					<span><input onChange={this.handleChange} className="input" type="text" placeholder="Search..." /></span>
					{this.state.input.length > 0 ? <div className='card scroll-box'>{searchPatients}</div> : <p></p>}


				</form>
			</div>
		);
	}
}

export default SearchBar;

