import * as types from './PatientPage.types.js';

import axios from 'axios';

const URL = 'https://us-central1-live-northcoders-nhs-app.cloudfunctions.net';


// FETCH PATIENT RECORD
export function fetchPatientRecord (id) {
	return function (dispatch) {
		dispatch(fetchPatientRecordRequest());
		return axios.get(`${URL}/getPatientById?id=${id}`)
			.then(res => {
				dispatch(fetchPatientRecordSuccess(res.data));
			})
			.catch(err => {
				dispatch(fetchPatientRecordError(err));
			});
	};
}

export function fetchPatientRecordRequest () {
	return {
		type: types.FETCH_PATIENT_RECORD_REQUEST
	};
}

export function fetchPatientRecordSuccess (record) {
	return {
		type: types.FETCH_PATIENT_RECORD_SUCCESS,
		data: record
	};
}
export function fetchPatientRecordError (error) {
	return {
		type: types.FETCH_PATIENT_RECORD_ERROR,
		data: error
	};
}

// UPDATE PATIENT RECORD
export function updatePatientRecord (newData, id) {
	return function (dispatch) {
		dispatch(updatePatientRecordRequest());
		axios.put(`${URL}/putPersonalDetails?id=${id}`, newData)
			.then((res) => {
				dispatch(updatePatientRecordSuccess(res.data));
			})
			.catch(err => {
				dispatch(updatePatientRecordError(err));
			});
	};
}

export function updatePatientRecordRequest () {
	return {
		type: types.UPDATE_PATIENT_RECORD_REQUEST
	};
}

export function updatePatientRecordSuccess (newInfo) {
	return {
		type: types.UPDATE_PATIENT_RECORD_SUCCESS,
		data: newInfo
	};
}
export function updatePatientRecordError (error) {
	return {
		type: types.UPDATE_PATIENT_RECORD_ERROR,
		data: error
	};
}

// ADD STAFF TASK
export function addStaffTask (newData, id) {
	console.log({newData});
	return function (dispatch) {
		dispatch(addStaffTaskRequest());
		return fetch(`${URL}/postCareLog?id=${id}`, {
			method: 'POST',
			body: JSON.stringify(newData)
		})
			.then(res => res.json())
			.then((body) => {
				dispatch(addStaffTaskSuccess(body));
			})
			.catch(err => {
				dispatch(addStaffTaskError(err));
			});
	};
}

export function addStaffTaskRequest () {
	return {
		type: types.ADD_STAFF_TASK_REQUEST
	};
}

export function addStaffTaskSuccess (newInfo) {
	return {
		type: types.ADD_STAFF_TASK_SUCCESS,
		data: newInfo
	};
}
export function addStaffTaskError (error) {
	return {
		type: types.ADD_STAFF_TASK_ERROR,
		data: error
	};
}