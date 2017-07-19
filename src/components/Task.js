import React from 'react';

import './component_styles/Task.css';

class Task extends React.Component {
	render () {
		return (
			<div className="component-Task card">
				<div className="card-header">
					<h3 className='title'>Medication</h3>
				</div>
				<div className="card-content">
					<h3>Due to be taken at 12pm</h3>
				</div>
				<div className="card-footer">
					<p>Created By: User</p>
					<p>Created At: TimeStamp</p>
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