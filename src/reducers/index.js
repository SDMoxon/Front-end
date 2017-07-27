import {patientReducer} from './reducer.PatientPage';
import {userPageReducer} from './reducer.UserPage';
import {combineReducers} from 'redux';

export default combineReducers({
    patientPage : patientReducer,
    userPage : userPageReducer

});
