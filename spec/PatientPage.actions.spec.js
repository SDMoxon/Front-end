import {expect} from 'chai';
import * as actions from '../src/actions/PatientPage.actions';
import * as types from '../src/actions/PatientPage.types';

describe('actions', () => {
    describe('fetchPatientrecordRequest', () => {
        it('should return the correct action for request', () => {
            expect(actions.fetchPatientRecordRequest()).to.eql({
                type: types.FETCH_PATIENT_RECORD_REQUEST
            });
        });
         it('should return the correct action for success', () => {
            let record = {name: 'Katie Johnson'};
            expect(actions.fetchPatientRecordSuccess(record)).to.eql({
                type: types.FETCH_PATIENT_RECORD_SUCCESS,
                data: record
            });
        });
         it('should return the correct action for error', () => {
            let error = 'error';
            expect(actions.fetchPatientRecordError(error)).to.eql({
                type: types.FETCH_PATIENT_RECORD_ERROR,
                data: error
            });
        });
    });
     describe('updatePatientrecordRequest', () => {
        it('should return the correct action for request', () => {
            expect(actions.updatePatientRecordRequest()).to.eql({
                type: types.UPDATE_PATIENT_RECORD_REQUEST
            });
        });
         it('should return the correct action for success', () => {
            let record = {name: 'Katie Johnson'};
            expect(actions.updatePatientRecordSuccess(record)).to.eql({
                type: types.UPDATE_PATIENT_RECORD_SUCCESS,
                data: record
            });
        });
         it('should return the correct action for error', () => {
            let error = 'error';
            expect(actions.updatePatientRecordError(error)).to.eql({
                type: types.UPDATE_PATIENT_RECORD_ERROR,
                data: error
            });
        });
    });
});