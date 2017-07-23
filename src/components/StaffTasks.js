import React from 'react';
import './component_styles/StaffTasks.css';
import Task from './Task';

class StaffTasks extends React.Component {
	render () {
		return (
			<div className="component-StaffTasks panel">
				<div className="panel-heading has-text-centered">
					<h1>Staff Tasks <button className="button is-info">Add A Task</button></h1>
					
				</div>
				<div className="panel-block">
					<Task />
					<Task />
					<Task />
				</div>
			</div>
		);
	}
}

export default StaffTasks;


