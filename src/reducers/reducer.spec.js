import { expect } from 'chai';
import { reducer } from './reducer';
import { initialState } from './reducer';
import * as actions from '../actions/actions';


describe.only('REDUCER', () => {
    it('is a function', () => {
        expect(reducer).to.be.a('function');
    });
    describe('fetchWards', () => {
        it('updates the state correctly, adding a list of wards', () => {
            const action = actions.fetchWardsSuccess({
                wardID1: {}
            });
            const newState = reducer(initialState, action);
            expect(newState.wards.wardID1).to.be.an('object');
        });
        it('returns the error if it fails', () => {

            const action = actions.fetchWardsFailed('error');
            const newState = reducer(initialState, action);
            expect(newState).to.equal('error');
        });
    });
    describe('fetchPatientsByWard', () => {
        it('updates the state correctly, adding a list of patients', () => {
            const action = actions.fetchPatientsByWardSuccess({
                patient1: {}
            });
            const newState = reducer(initialState, action);
            expect(newState.patients.patient1).to.be.an('object');
        });
        it('returns the error if it fails', () => {

            const action = actions.fetchPatientsByWardFailed('error');
            const newState = reducer(initialState, action);
            expect(newState).to.equal('error');
        });
    });
    describe('fetchpatientByName', () => {
        it('updates the state correctly, adding a list search specific patients', () => {
            const action = actions.fetchPatientsByNameSuccess({
                patient2: {}
            });
            const newState = reducer(initialState, action);
            expect(newState.search.patient2).to.be.an('object');
        });
        it('returns the error if it fails', () => {

            const action = actions.fetchPatientsByNameFailed('error');
            const newState = reducer(initialState, action);
            expect(newState).to.equal('error');
        });
    });
});


