import React from 'react';
import './component_styles/StaffTasks.css';
import Task from './Task';
import NewTask from './NewTask';


class StaffTasks extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			newTaskIsOpen: false,
			allTasks:
			[
				{ title: 'Medication', note: 'Paracetamol due in 2 hours', createdBy: 'user', createdAt: '22/07/17 12.30.12' },
				{ title: 'Appoitment', note: 'Doctor due to visit', createdBy: 'user', createdAt: '22/07/17 12.30.12' },
				{ title: 'Take food', note: 'Served tea and toast only- need to take lunch order', createdBy: 'user', createdAt: '22/07/17 12.30.12' },
				{ title: 'Vitals', note: 'patients blood pressure too low - keep an eye on hydration', createdBy: 'user', createdAt: '22/07/17 12.30.12' }
			]
		};
		this.toggleNewTask = this.toggleNewTask.bind(this);
	}
	toggleNewTask () {
		this.setState({
			newTaskIsOpen: !this.state.newTaskIsOpen
		});
	}

	render () {
		return (
			<div className="component-StaffTasks panel">
				<div className="panel-heading has-text-centered">
					<h1>Staff Tasks</h1>
				</div>
					<button onClick={this.toggleNewTask} id='addTask' className='button is-info'>Add A Task...</button>
				<div className="panel-block">
					<NewTask
					showNewTaskForm={this.state.newTaskIsOpen}
					onClose={this.toggleNewTask}
					/>
					{this.state.allTasks.map((task, i) => (
						<Task
							key={i}
							title={task.title}
							note={task.note}
							createdBy={task.createdBy}
							createdAt={task.createdAt}
						/>
					))
					}
				</div>
			</div>
		);
	}
}

export default StaffTasks;


