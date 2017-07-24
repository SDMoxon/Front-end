import * as types from '../actions/PatientPage.types.js';


export const initialState = {
    patient: {
        //     personalDetails: {
        //   GP: {
        //     address: '43996, Sebastian Light, Bedfordshire',
        //     name: 'Isac Wisoky',
        //     surgery: 'Beer, Blanda and Bartoletti'
        //   },
        //   NHSnumber: 368216069,
        //   address: '5542, Hallie Rapids, Borders 45967-5493',
        //   bloodType: 'AB',
        //   demographics: {
        //     alcohol: {
        //       unitsPerDay: 77141,
        //       unitsPerWeek: 96168,
        //       use: 'yes'
        //     },
        //     dob: '2016-11-10T03:52:56.370Z',
        //     ethnicity: 'british white',
        //     gender: 'male',
        //     language: 'ENG',
        //     race: 'White/Caucasian',
        //     smoking: {
        //       status: 'Never smoker',
        //       unitsPerDay: 73645,
        //       unitsPerWeek: 77450
        //     }
        //   },
        //   email: 'Lon_Stiedemann@hotmail.com',
        //   firstNames: [
        //     'Miguel',
        //     'Eda'
        //   ],
        //   nextOfKin: {
        //     contact: '1-194-922-5139',
        //     name: 'Giuseppe Reinger',
        //     relationship: 'friends'
        //   },
        //   occupation: 'International Creative Administrator',
        //   surname: 'Gulgowski'
        // }

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
        newState.patient = action.data;
        newState.loading = false;
        return newState;
    }
    return prevState;
}