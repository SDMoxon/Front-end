import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// Actions
import * as actions from '../actions/actions';

// Components
import ProfileCard from '../components/ProfileCard';
import WardSearch from '../components/WardSearch';
import PatientList from '../components/PatientList';
// import DateFormat from 'dateformat';

// CSS
import './page_styles/UserPage.css';

// import './page_styles/UserPage.css'


class UserPage extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			currentDate: new Date(),
			check: false
		};

		this.handleClick = this.handleClick.bind(this);
	}
	componentDidMount() {
		this.props.getWards();
	}
	handleClick(e) {
		const wardName = e.target.value;
		e.preventDefault();
		this.props.getPatientsByWard(wardName);
		this.setState({
			check: true
		});


	}

	render() {
		// Get the ward names
		const result = Object.keys(this.props.wards).map((key) => {
			return this.props.wards[key].name;
		});

		return (
			<div className="component-UserPage columns">
				<div className="column-1 column is-4">
					<ProfileCard id='proCard' />
				</div>
				<div className="column-2 column is-3">

					<WardSearch handleClick={this.handleClick} wardNames={result} />

				</div>
				<div className="column-3 column is-5">
					<div className="Patient-List">
						{this.state.check ? <PatientList patients={this.props.patients} /> : null}
					</div>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		wards: state.userPage.wards,
		patients: state.userPage.patients
	};
}

function mapDispatchToProps(dispatch) {
	return {
		getWards: () => {
			dispatch(actions.fetchWards());
		},
		getPatientsByWard: (wardName) => {
			dispatch(actions.fetchPatientsByWard(wardName));
		}
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);


UserPage.propTypes = {
	getWards: PropTypes.func.isRequired,
	getPatientsByWard: PropTypes.func.isRequired,
	wards: PropTypes.object.isRequired,
	patients: PropTypes.object.isRequired
};
