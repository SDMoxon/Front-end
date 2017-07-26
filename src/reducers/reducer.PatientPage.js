import * as types from '../actions/PatientPage.types.js';


export const initialState = {
    patient: {
    },
    loading: false,
    error: null
};

export function patientReducer (prevState = initialState, action) {
    if (!action) return prevState;
    // GET PATIENT RECORD REQUEST
    if (action.type === types.FETCH_PATIENT_RECORD_REQUEST) {
        const newState = Object.assign({}, prevState);
        newState.loading = true;
        return newState;
    }
    // GET PATIENT RECORD SUCCESS
    if (action.type === types.FETCH_PATIENT_RECORD_SUCCESS) {
        const newState = Object.assign({}, prevState);
        newState.patient = Object.assign({}, newState.patient);
        newState.patient = action.data;
        newState.loading = false;
        return newState;
    }
    // GET PATIENT RECORD ERROR
    if (action.type === types.FETCH_PATIENT_RECORD_ERROR) {
        const newState = Object.assign({}, prevState);
        newState.loading = false;
        newState.error = action.data;
        return newState;
    }

    // UPDATE PATIENT RECORD REQUEST
    if (action.type === types.UPDATE_PATIENT_RECORD_REQUEST) {
        const newState = Object.assign({}, prevState);
        newState.loading = true;
        return newState;
    }

    // UPDATE PATIENT RECORD SUCCESS
    if (action.type === types.UPDATE_PATIENT_RECORD_SUCCESS) {
        const newState = Object.assign({}, prevState);
        newState.patient = Object.assign({}, newState.patient);
        newState.patient.personalDetails = Object.assign({}, newState.patient.personalDetails);
        newState.patient.personalDetails = action.data;
        newState.loading = false;
        return newState;
    }

        // UPDATE PATIENT RECORD ERROR
    if (action.type === types.UPDATE_PATIENT_RECORD_ERROR) {
        const newState = Object.assign({}, prevState);
        newState.loading = false;
        newState.error = action.data;
        return newState;
    }

    return prevState;
}