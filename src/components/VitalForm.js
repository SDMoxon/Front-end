import React from 'react';
import PropTypes from 'prop-types';
import './component_styles/VitalForm.css';

class VitalForm extends React.Component {
	constructor (props) {
		super(props);
	}
	render () {
		if (this.props.showVital) {
			return (
				<div className="component-vitalForm">
					<nav className="level">
						<div className="level-item">
							<div>
								<p id='title' className="title">Enter Latest Vitals</p>
							</div>
						</div>
					</nav>
					<div className="columns">

						<div className="column">
							<div className="field">
								<label className="label">Blood Pressure SYS</label>
								<div className="control">
									<input className="input" type="text" placeholder="" />
								</div>
							</div>

							<div className="field">
								<label className="label">Blood Pressure DIA</label>
								<div className="control">
									<input className="input" type="email" placeholder="" />
								</div>
							</div>

							<div className="field">
								<label className="label">Respiratory Rate</label>
								<div className="control">
									<input className="input" type="email" placeholder="" />
								</div>
							</div>
						</div>

						<div className="column">
							<div className="field">
								<label className="label">Temperature</label>
								<div className="control">
									<input className="input" type="text" placeholder="" />
								</div>
							</div>

							<div className="field">
								<label className="label">Pulse</label>
								<div className="control">
									<input className="input" type="email" placeholder="" />
								</div>
							</div>

							<div className="field">
								<div className="control">
									<button className="button is-white">Confirm & Submit</button>
									<button
										className="button is-danger is-pulled-right"
										onClick={this.props.onClose}
									>Cancel</button>
								</div>

							</div>
						</div>


					</div>
				</div>
			);
		}
		return (
			<div></div>
		);
	}
}

export default VitalForm;

VitalForm.propTypes = {
	onClose: PropTypes.func.isRequired,
	showVital: PropTypes.bool
};