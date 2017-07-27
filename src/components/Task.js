import React from 'react';
import PropTypes from 'prop-types';

import './component_styles/Task.css';

class Task extends React.Component {
	constructor (props) {
		super(props);
	}
	render () {
		return (
			<div className="component-Task card is-fullwidth">
				<div className="card-header">
					<h3 id='title' className='title'>{this.props.title}</h3>
				</div>
				<div className="card-content">
					<h3>{this.props.note}</h3>
				</div>
				<div className="card-footer">
					<p><span id='createdBy'>Created By: </span>{this.props.createdBy}</p>
					<p>Created At: {this.props.createdAt}</p>
					<label id='checkbox' className="checkbox">
						<input type="checkbox" />Done</label>
					<i id='trash-can' className="fa fa-trash-o" aria-hidden="true"></i>
					<i id='pencil' className="fa fa-pencil" aria-hidden="true"></i>
				</div>
			</div>
		);
	}
}

export default Task;

Task.propTypes = {
	title: PropTypes.string.isRequired,
	note: PropTypes.string.isRequired,
	createdAt: PropTypes.string.isRequired,
	createdBy: PropTypes.string.isRequired,
};
