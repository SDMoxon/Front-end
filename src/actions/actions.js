import * as types from './types';
import axios from 'axios';


export function fetchWards () {
    return function (dispatch) {

        dispatch(fetchWardsRequest());
        return axios.get('https://us-central1-live-northcoders-nhs-app.cloudfunctions.net/getWards')
            .then(res => {
                dispatch(fetchWardsSuccess(res.data));

            })
            .catch(err => {
                dispatch(fetchWardsFailed(err));
            });
    };
}


export function fetchWardsRequest () {
    return {
        type: types.FETCH_WARDS_REQUEST,
    };
}
export function fetchWardsSuccess (payload) {

    return {
        type: types.FETCH_WARDS_SUCCESS,
        data: payload
    };
}
export function fetchWardsFailed (err) {

    return {
        type: types.FETCH_WARDS_FAILED,
        data: err
    };
}

export function fetchPatientsByWard (ward) {
    return function (dispatch) {

    dispatch(fetchPatientsByWardRequest());
    return axios.get(`https://us-central1-live-northcoders-nhs-app.cloudfunctions.net/getPatientsByWard?ward=${ward}`)
        .then(res => {
            dispatch(fetchPatientsByWardSuccess(res.data));

        })
        .catch(err => {
            dispatch(fetchPatientsByWardFailed(err));
        });
    };
}

export function fetchPatientsByWardRequest () {
    return {
        type: types.FETCH_PATIENTS_BY_WARD_REQUEST
    };
}

export function fetchPatientsByWardSuccess (payload) {
    return {
        type: types.FETCH_PATIENTS_BY_WARD_SUCCESS,
        data: payload
    };
}

export function fetchPatientsByWardFailed (err) {
    return {
        type: types.FETCH_PATIENTS_BY_WARD_FAILED,
        data: err
    };
}

export function fetchPatientsByName (name) {
    return function (dispatch) {

    dispatch(fetchPatientsByNameRequest());
    return axios.get(`https://us-central1-live-northcoders-nhs-app.cloudfunctions.net/patientByName?name=${name}`)
        .then(res => {
            dispatch(fetchPatientsByNameSuccess(res.data));

        })
        .catch(err => {
            dispatch(fetchPatientsByNameFailed(err));
        });
    };
}

export function fetchPatientsByNameRequest () {
    return {
        type: types.FETCH_PATIENTS_BY_NAME_REQUEST
    };
}

export function fetchPatientsByNameSuccess (payload) {
    return {
        type: types.FETCH_PATIENTS_BY_NAME_SUCCESS,
        data: payload
    };
}

export function fetchPatientsByNameFailed (err) {
    return {
        type: types.FETCH_PATIENTS_BY_NAME_FAILED,
        data: err
    };
}