import React from 'react';
import PropTypes from 'prop-types';

import './component_styles/NewTask.css';

class NewTask extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      title: '',
      note: '',
      createdBy: 'Nurse Nightingale',
      createdAt: '22/07/17 23.04.14'
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange (e) {
    e.preventDefault();
    this.setState({
      [e.target.id]: e.target.value
    });
  }
  
  render () {
    if (this.props.showNewTaskForm) {
      return (
        <form className='newCard-form field'>
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

export default NewTask;

NewTask.propTypes = {
  showNewTaskForm: PropTypes.bool.isRequired,

};
