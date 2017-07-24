import {expect} from 'chai';
import {fetchPatientRecordSuccess} from '../src/actions/PatientPage.actions';
import {initialState, patientReducer} from '../src/reducers/reducer.PatientPage.js';

describe('REDUCER', () => {
    it('should be a function', () => {
        expect(patientReducer).to.be.a('function');
    });
    describe('action: fetchPatientRecord', () => {
        it('should update the state correctly', () => {
            const action = fetchPatientRecordSuccess();
            const newstate = patientReducer(initialState, action);
            expect(initialState).to.not.eql(newstate);
        });
    });
});