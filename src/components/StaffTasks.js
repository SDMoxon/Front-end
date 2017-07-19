import React from 'react';

import Task from './Task';

class StaffTasks extends React.Component {
	render () {
		return (
			<div className="component-StaffTasks panel">
				<div className="panel-heading">
					<h1>Staff Tasks</h1>
				</div>
				<div className="panel-block">
					<Task />
					<Task />
					<Task />
					<Task />
					<Task />
				</div>
			</div>
		);
	}
}

export default StaffTasks;


