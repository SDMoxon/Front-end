import * as types from './PatientPage.types.js';

import axios from 'axios';

const URL = 'https://us-central1-live-northcoders-nhs-app.cloudfunctions.net';


// FETCH PATIENT RECORD
export function fetchPatientRecord () {
    return function (dispatch) {
        dispatch(fetchPatientRecordRequest());
        axios.get(`${URL}/getPatientById?id=-KptL4lyQlhPV5QUIsDP`)
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
export function updatePatientRecord () {
    return function (dispatch) {
        dispatch(updatePatientRecordRequest());
        axios.put(`${URL}/putPatientDetails/getPatientById?id=-Kp_RG6tpBQcRm3RrO8Q`)
            .then(res => {
                console.log(res.data);
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