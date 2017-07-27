import React from 'react';
import PropTypes from 'prop-types';
import './component_styles/StaffTasks.css';
import Task from './Task';
import NewTask from './NewTask';


class StaffTasks extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			newTaskIsOpen: false
		};
		this.toggleNewTask = this.toggleNewTask.bind(this);
	}
	toggleNewTask () {
		this.setState({
			newTaskIsOpen: !this.state.newTaskIsOpen
		});
	}
	render () {
		const {newTaskIsOpen} = this.state;
		const {patientId, patient} = this.props;
		const tasks = Object.values(patient.careLog);
		return (
			<div className="component-StaffTasks panel">
				<div className="panel-heading has-text-centered">
					<h1>Staff Tasks</h1>
				</div>
					<button onClick={this.toggleNewTask} id='addTask' className='button is-info'>Add A Task...</button>
				<div className="panel-block">
					<NewTask
						showNewTaskForm={newTaskIsOpen}
						onClose={this.toggleNewTask}
						patientId={patientId}
					/>
					{tasks.map((task, i) => (
						<Task
							key={i}
							title={task.title}
							note={task.note}
							createdBy={task.author}
							createdAt={task.createdAt}
							done={task.done}
						/>
					))
					}
				</div>
			</div>
		);
	}
}

StaffTasks.propTypes = {
	patientId: PropTypes.string.isRequired,
	patient: PropTypes.shape({
		careLog: PropTypes.object.isRequired,
	})
};

export default StaffTasks;