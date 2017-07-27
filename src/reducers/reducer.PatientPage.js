import * as types from '../actions/PatientPage.types.js';


export const initialState = {
    patient: null,
    loading: false,
    error: null
};

export function patientReducer (prevState = initialState, action) {
    if (!action) return prevState;
    // GET PATIENT RECORD REQUEST
    if (action.type === types.FETCH_PATIENT_RECORD_REQUEST) {
        const newState = Object.assign({}, prevState, {
            loading: true
        });
        return newState;
    }
    // GET PATIENT RECORD SUCCESS
    if (action.type === types.FETCH_PATIENT_RECORD_SUCCESS) {
        const newState = Object.assign({}, prevState, {
            patient: action.data,
            loading: false
        });
        return newState;
    }
    // GET PATIENT RECORD ERROR
    if (action.type === types.FETCH_PATIENT_RECORD_ERROR) {
        const newState = Object.assign({}, prevState, {
            loading: false,
            error: action.data
        });
        return newState;
    }

    // UPDATE PATIENT RECORD REQUEST
    if (action.type === types.UPDATE_PATIENT_RECORD_REQUEST) {
        const newState = Object.assign({}, prevState, {
            loading: true
        });
        return newState;
    }

    // UPDATE PATIENT RECORD SUCCESS
    if (action.type === types.UPDATE_PATIENT_RECORD_SUCCESS) {
        const newState = Object.assign({}, prevState, {
            loading: false,
            patient: Object.assign({}, prevState.patient, {
                personalDetails: action.data
            })
        });
        return newState;
    }

    // UPDATE PATIENT RECORD ERROR
    if (action.type === types.UPDATE_PATIENT_RECORD_ERROR) {
        const newState = Object.assign({}, prevState, {
            loading: false,
            error: action.data
        });
        return newState;
    }

     // ADD PATIENT TASK
    if (action.type === types.ADD_STAFF_TASK_REQUEST) {
        const newState = Object.assign({}, prevState, {
            loading: true
        });
        return newState;
    }

    // UPDATE PATIENT RECORD SUCCESS
    if (action.type === types.ADD_STAFF_TASK_SUCCESS) {
        const newKey = String(Date.now());
        const newState = Object.assign({}, prevState, {
            loading: false,
            patient: Object.assign({}, prevState.patient, {
                careLog: Object.assign({}, prevState.patient.careLog, {
                    [newKey]: action.data
                })
            })
        });
        return newState;
    }

        // UPDATE PATIENT RECORD ERROR
    if (action.type === types.ADD_STAFF_TASK_ERROR) {
        const newState = Object.assign({}, prevState, {
            loading: false,
            error: action.data
        });
        return newState;
    }
    return prevState;
}