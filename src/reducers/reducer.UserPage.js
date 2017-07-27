import * as types from '../actions/types';

export const initialState = {
    wards: {},
    patients: {},
    doctors: {},
    nurses: {},
    search: {}
};

export function userPageReducer (prevState = initialState, action) {
    if (!action) return prevState;

    if (action.type === types.FETCH_WARDS_SUCCESS) {
        const newState = Object.assign({}, prevState);
        newState.wards = Object.assign({}, action.data);
        return newState;
    }

    if (action.type === types.FETCH_WARDS_FAILED) {
        return action.data;
    }

    if (action.type === types.FETCH_PATIENTS_BY_WARD_SUCCESS) {
        const newState = Object.assign({}, prevState);
        newState.patients = Object.assign({}, action.data);
        return newState;
    }

    if (action.type === types.FETCH_PATIENTS_BY_WARD_FAILED) {
        return action.data;
    }

    if (action.type === types.FETCH_PATIENTS_BY_NAME_SUCCESS) {
        const newState = Object.assign({}, prevState);
        newState.search = Object.assign({}, action.data);
        return newState;
    }

    if (action.type === types.FETCH_PATIENTS_BY_NAME_FAILED) {
        return action.data;
    }

    return prevState;
}

// export const FETCH_PATIENTS_BY_WARD_REQUEST = 'FETCH PATIENTS BY WARD REQUEST';
// export const FETCH_PATIENTS_BY_WARD_SUCCESS = 'FETCH PATIENTS BY WARD SUCCESS';
// export const FETCH_PATIENTS_BY_WARD_FAILED = 'FETCH PATIENTS BY WARD FAILED';

// export const FETCH_PATIENTS_BY_NAME_REQUEST = 'FETCH PATIENTS BY NAME REQUEST';
// export const FETCH_PATIENTS_BY_NAME_SUCCESS = 'FETCH PATIENTS BY NAME SUCCESS';
// export const FETCH_PATIENTS_BY_NAME_FAILED = 'FETCH PATIENTS BY NAME FAILED';