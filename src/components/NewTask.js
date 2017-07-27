import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../actions/PatientPage.actions';

import './component_styles/NewTask.css';

class NewTask extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
        title: '',
        note: '',
        createdBy: 'Nurse Nightingale'
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange (e) {
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  handleSubmit (e) {
    e.preventDefault();
    this.props.addStaffTask({
      title: this.state.title,
      note: this.state.note,
      createdBy: this.state.createdBy
    }, this.props.patientId);
    this.props.onClose();

  }

  render () {
    if (this.props.showNewTaskForm) {
      return (
        <form className='newCard-form field' onSubmit={this.handleSubmit}>
          <div className="field">
            <div className="control">
              <input
                id='title'
                onChange={this.handleChange}
                className="input is-primary"
                type="text"
                placeholder="Please enter your task title here" />
            </div>
          </div>
          <textarea
            id='note'
            onChange={this.handleChange}
            className='add-card textarea'
            placeholder='Please enter your task details here'>
          </textarea>
          <button type='submit' id='addTask' className='button is-success'>Confirm & Add</button>
          <button type='cancel' id='cancelAddTask' className='button is-danger is-pulled-right'>Cancel</button>
        </form>
      );
    }

    return (
      <div></div>
    );
  }
}


function mapDispatchToProps (dispatch) {
  return {
    addStaffTask: (newData, id) => {
      dispatch(actions.addStaffTask(newData, id));
    }
  };
}

export default connect(null, mapDispatchToProps)(NewTask);

NewTask.propTypes = {
  showNewTaskForm: PropTypes.bool.isRequired,
  addStaffTask: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  patientId: PropTypes.string.isRequired
};
