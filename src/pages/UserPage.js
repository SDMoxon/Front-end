import React from 'react';
import ProfileCard from '../components/ProfileCard';
import SearchBar from '../components/SearchBar';
import WardSearch from '../components/WardSearch';
import PatientList from '../components/PatientList';
import './page_styles/UserPage.css';
import DateFormat from 'dateformat';

// import './page_styles/UserPage.css'

const wards = {
	'Florence': {
		patients: [{
			'id': '12345',
			'name': 'Sarah Fowler',
			'condition': 'Broken Foot'
		},
		{
			'id': '12345',
			'name': 'Barry Bridgewater',
			'condition': 'Heart Transplant'
		},
		{
			'id': '12345',
			'name': 'Terry Hughs',
			'condition': 'Broken Femur'
		},
		{
			'id': '12345',
			'name': 'Joanne Fitzgerald',
			'condition': 'Dislocated Elbow'
		},
		{
			'id': '12345',
			'name': 'Bridget Jones',
			'condition': 'Broken Heart'
		},
		{
			'id': '12345',
			'name': 'Mark Darcey',
			'condition': 'Verbal'
		}
		]
	},
	'CCU': {
		patients: [{
			'id': '12345',
			'name': 'Janice Brown',
			'condition': 'Heart Attack'
		},
		{
			'id': '12345',
			'name': 'Fredrik Kappo',
			'condition': 'Heart Transplant'
		}
		]
	},
	'Respiratory': {
		patients: [{
			'id': '12345',
			'name': 'Jackie Chan',
			'condition': 'Everything'
		},
		{
			'id': '12345',
			'name': 'Paulo Nutini',
			'condition': 'Broken Voice box'
		}
		]
	},
	'Nightingale': {
		patients: [{
			'id': '12345',
			'name': 'Joanne Fitzgerald',
			'condition': 'Dislocated Elbow'
		},
		{
			'id': '12345',
			'name': 'Bridget Jones',
			'condition': 'Broken Heart'
		}
		]
	},
	'Antenatal': {
		patients: [{
			'id': '12345',
			'name': 'Janice Brown',
			'condition': 'Heart Attack'
		},
		{
			'id': '12345',
			'name': 'Fredrik Kappo',
			'condition': 'Heart Transplant'
		}, {
			'id': '12345',
			'name': 'Bridget Jones',
			'condition': 'Broken Heart'
		},
		{
			'id': '12345',
			'name': 'Mark Darcey',
			'condition': 'Verbal'
		}
		]
	},
	'ICU': {
		patients: [{
			'id': '12345',
			'name': 'Janice Brown',
			'condition': 'Heart Attack'
		},
		{
			'id': '12345',
			'name': 'Fredrik Kappo',
			'condition': 'Heart Transplant'
		}
		]
	},
	'Maternity': {},
	'Neonatal': {},
	'Vascular': {},
	'OPU': {},
	'Surgery': {},
	'A&E': {},
	'Fracture': {},
	'XRAY': {}
};

class UserPage extends React.Component {
	constructor (props) {
		super(props);

		this.state = {
			patients: [{
				'id': '12345',
				'name': 'Sarah Fowler',
				'condition': 'Broken Foot'
			},
			{
				'id': '12345',
				'name': 'Barry Bridgewater',
				'condition': 'Heart Transplant'
			},
			{
				'id': '12345',
				'name': 'Terry Hughs',
				'condition': 'Broken Femur'
			},
			{
				'id': '12345',
				'name': 'Joanne Fitzgerald',
				'condition': 'Dislocated Elbow'
			},
			{
				'id': '12345',
				'name': 'Bridget Jones',
				'condition': 'Broken Heart'
			},
			{
				'id': '12345',
				'name': 'Mark Darcey',
				'condition': 'Verbal'
			}
			],
			currentDate: new Date()
		};

		this.handleClick = this.handleClick.bind(this);
	}
	handleClick (e) {
		console.log(e.target.value);
		e.preventDefault();
		this.setState({ patients: wards[e.target.value].patients });
		console.log(this.state.patients);
	}

	render () {
		setTimeout(() => {
			this.setState({ currentDate: new Date() });
		}, 1000);
		let dateString = DateFormat(this.state.currentDate, 'dddd, mmmm dS, yyyy, h:MM:ss TT');
		return (
			<div className="component-UserPage flex-container tablet 769px">
				<div className="column-1 flex-item column is-4">
					<ProfileCard />
					<div className="search-bar">
						<SearchBar />
					</div>
					<div className="time-date flex-item">
						<p >{dateString}</p>
					</div>

				</div>
				<div className="column-2 flex-item column is-3">
					<div className="Ward-Search">
						<WardSearch handleClick={this.handleClick} wardNames={Object.keys(wards)} />
					</div>

				</div>
				<div className="column-3 flex-item column is-5">
					<div className="Patient-List">
						{this.state.patients ? <PatientList patients={this.state.patients} /> : null}
					</div>

				</div>

			</div>
		);
	}
}

export default UserPage;
