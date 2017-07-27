import { expect } from 'chai';
import * as actions from './actions';
import * as types from './types';

import nock from 'nock';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import fetchMock from 'fetch-mock';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const mockPatientsByWard = {
    '-KptL4Yt6mPa2qlEAwl1': {
        'name': 'Graciela Shields',
            'NHS number': 671780127,
                'condition': 'pneumonia'
    },
    '-KptL4ZO4zATKF6tEcoQ': {
        'name': 'Madalyn Adams',
            'NHS number': 610519554,
                'condition': 'pneumonia'
    },
    '-KptL4_8qFPktfm3R-hl': {
        'name': 'Hilma Jones',
            'NHS number': 900406372,
                'condition': 'pneumonia'
    },
    '-KptL4lyQlhPV5QUIsDP': {
        'name': 'Oscar Bayer',
            'NHS number': 261909730,
                'condition': 'pneumonia'
    },
    '-KptL4mV2aUs8bi_-4_1': {
        'name': 'Felton Jones',
            'NHS number': 744750640,
                'condition': 'pneumonia'
    },
    '-KptL4nCurGvjzXLPY_u': {
        'name': 'Emelia Cruickshank',
            'NHS number': 870613074,
                'condition': 'pneumonia'
    },
    '-KptL4olYAxAn2g3lymN': {
        'name': 'Rodolfo Mosciski',
            'NHS number': 362866495,
                'condition': 'pneumonia'
    },
    '-KptL4uum0-wmvKNMcGl': {
        'name': 'Damion Davis',
            'NHS number': 45404840,
                'condition': 'pneumonia'
    },
    '-KptL4v7GvdIvcstZYp6': {
        'name': 'Morton Thompson',
            'NHS number': 576397489,
                'condition': 'pneumonia'
    },
    '-KptL4z30WPiR5M4u8dm': {
        'name': 'Kristoffer Price',
            'NHS number': 187930835,
                'condition': 'pneumonia'
    },
    '-KptL4ze-7N69Fs5YzR4': {
        'name': 'Elvie Shields',
            'NHS number': 863943069,
                'condition': 'pneumonia'
    },
    '-KptL51qBRIU6Xt_ph_K': {
        'name': 'Newton Kulas',
            'NHS number': 182039184,
                'condition': 'pneumonia'
    },
    '-KptL5KaELdxcIjxwhV2': {
        'name': 'Nils Zemlak',
            'NHS number': 333340632,
                'condition': 'pneumonia'
    },
    '-KptL5UEZ9hNiq7aw4zd': {
        'name': 'Domenick Carroll',
            'NHS number': 857949758,
                'condition': 'pneumonia'
    }
};

const mockPatientsByName = {

    '-KptL4_8qFPktfm3R-hl': {
        'allergies': {
            'Oxycodone': {
                'codes': {
                    '10831': {
                        'codeSystem': '2.16.840.1.113883.6.88',
                        'codeSystemName': 'RxNorm',
                        'name': 'Bactrim'
                    },
                    'N0000008034': {
                        'codeSystem': '2.16.840.1.113883.3.26.1.5',
                        'codeSystemName': 'NDF-RT',
                        'name': 'Sulfa (Sulfonamide Antibiotics)'
                    }
                },
                'createAt': '2014-10-19T21:02:17.949Z',
                'name': 'Oxycodone',
                'reactions': 'swollen hands',
                'updatedAt': '2014-10-19T21:02:17.949Z'
            }
        },
        'careLog': {
            '20140902T055022655dsadA': {
                'author': 'Dr. Who',
                'note': 'This is a note',
                'witness': 'Dr Who’s Phone Booth'
            }
        },
        'currentDoctor': 'Freddy Mueller',
        'currentMedicalState': {
            'causeOfAdmission': 'strong cough',
            'contagionLevel': 'amber',
            'currentCondition': 'pneumonia',
            'symptoms': 'severe cough, high temperature'
        },
        'medicalHistory': {
            'familyHistory': {
                'John Doe': {
                    'condition': 'Acute Procrastinatory Neurosis',
                    'date': '18-07-2010',
                    'name': 'John Doe',
                    'relationship': 'Parent'
                }
            },
            'patientHistory': {
                'lazyitosis': {
                    'date': '20-07-2017',
                    'medication': {
                        'loratadine': {
                            'commonBrandName': 'CLARITIN',
                            'dosageInfo': '10 MG tablet',
                            'instructions': 'Take 1 tab by mouth as needed (allergies).',
                            'name': 'loratadine',
                            'type': '(CLARITIN) 10 MG tablet'
                        }
                    },
                    'name': 'lazyitosis',
                    'treatement': {
                        'surgeries': {
                            'hospital': 'Procrastination General',
                            'surgeon': 'Shea Le Beuf'
                        }
                    }
                }
            }
        },
        'medication': {
            'loratadine': {
                'commonBrandName': 'CLARITIN',
                'dosageInfo': '10 MG tablet',
                'instructions': 'Take 1 tab by mouth as needed (allergies).',
                'name': 'loratadine',
                'type': '(CLARITIN) 10 MG tablet'
            }
        },
        'nutritionalRequierments': {
            'gluten intolerance': {
                'name': 'gluten intolerance',
                'recommendation': 'serve gluten-free produce'
            },
            'lactose intolerance': {
                'name': 'lactose intolerance',
                'recommendation': 'dont serve milk'
            }
        },
        'personalDetails': {
            'GP': {
                'address': '45761, Agustina Wells, Berkshire',
                'name': 'Haley Langworth',
                'surgery': 'Dooley Group'
            },
            'NHSnumber': 900406372,
            'address': '54584, Bechtelar Terrace, Berkshire 12161',
            'bloodType': 'AB',
            'demographics': {
                'alcohol': {
                    'unitsPerDay': 91188,
                    'unitsPerWeek': 76560,
                    'use': 'yes'
                },
                'dob': '2016-07-30T22:37:19.774Z',
                'ethnicity': 'british white',
                'gender': 'male',
                'language': 'ENG',
                'race': 'White/Caucasian',
                'smoking': {
                    'status': 'Never smoker',
                    'unitsPerDay': 93908,
                    'unitsPerWeek': 16110
                }
            },
            'email': 'Keshawn_Romaguera74@gmail.com',
            'firstNames': [
                'Hilma',
                'Jalyn'
            ],
            'nextOfKin': {
                'contact': '479.848.9108',
                'name': 'Lillian Wehner',
                'relationship': 'friends'
            },
            'occupation': 'Dynamic Usability Consultant',
            'surname': 'Jones'
        },
        'testResult': {
            'bloods': {
                '20140902T055022655A': {
                    'heamoglobin': 162,
                    'platelets': 243,
                    'vitimin b12': 816,
                    'white Cell Count': 10
                }
            },
            'urine': {
                '20140902T055022655A': {
                    'glucose': 107,
                    'nitrate': 0,
                    'pH': 107,
                    'protein': 97
                }
            }
        },
        'vitals': {
            '20140902T055022': {
                'author': 'doctorId1',
                'organization': {
                    'href': '/medical/organizations/53c050ac51c69003200aa998',
                    'id': '53c050ac51c69003200aa998',
                    'name': 'Salford Royal'
                },
                'results': {
                    'DIASTOLIC_BLOOD_PRESSURE': 10135,
                    'HEART_RATE': 93308,
                    'SYSTOLIC_BLOOD_PRESSURE': 2711
                }
            },
            '20140902T055022655A': {
                'author': 'doctorId2',
                'organization': {
                    'href': '/medical/organizations/53c050ac51c69003200aa998',
                    'id': '53c050ac51c69003200aa998',
                    'name': 'Salford Royal'
                },
                'results': {
                    'DIASTOLIC_BLOOD_PRESSURE': 85410,
                    'HEART_RATE': 34133,
                    'SYSTOLIC_BLOOD_PRESSURE': 88173
                }
            }
        },
        'wardName': 'Acute Neurology Unit'
    }
};
describe('ACTIONS', () => {
    describe('WARD ACTIONS', () => {
        describe('fetchWardsRequest', () => {
            it('should be a function', () => {
                expect(actions.fetchWardsRequest).to.be.a('function');
            });
            it('returns the expected action', () => {
                expect(actions.fetchWardsRequest()).to.eql({
                    type: 'FETCH WARDS REQUEST'
                });
            });
        });
        describe('fetchWardsSuccess', () => {
            it('should be a fumction', () => {
                expect(actions.fetchWardsSuccess).to.a('function');
            });
            it('returns the expected actions', () => {
                expect(actions.fetchWardsSuccess('ward name')).to.eql({
                    type: 'FETCH WARDS SUCCESS',
                    data: 'ward name'
                });
            });
        });
        describe('fetchWardsFailed', () => {
            it('should be a function', () => {
                expect(actions.fetchWardsFailed).to.be.a('function');
            });
            it('returns the expected actions', () => {
                const error = {
                    err: 'I am an error'
                };
                expect(actions.fetchWardsFailed(error)).to.eql({
                    type: 'FETCH WARDS FAILED',
                    data: error
                });
            });
        });

        describe('ASYNC ACTIONS', () => {
            afterEach(() => {
                nock.cleanAll();
            });

            describe('fetchWards', () => {
                it('returns FETCH_WARDS_SUCCESS if fetchingArticles has been done', () => {
                    nock('https://us-central1-live-northcoders-nhs-app.cloudfunctions.net')
                        .get('/getWards')
                        .reply(200, {
                            wards: {
                                wardID1: {
                                    building: 'Humphrey Booth Building',
                                    floor: 0,
                                    name: 'Acute Neurology Unit'
                                },
                                wardID2: {
                                    building: 'Humphrey Booth Building',
                                    floor: 1,
                                    name: 'Acute Neurology Unit'

                                }
                            }
                        });

                    const store = mockStore({
                        wards: {
                            wardID1: {
                                building: 'Humphrey Booth Building',
                                floor: 0,
                                name: 'Acute Neurology Unit'
                            },
                            wardID2: {
                                building: 'Humphrey Booth Building',
                                floor: 1,
                                name: 'Acute Neurology Unit'

                            }
                        }
                    });

                    const expectedActions = [
                        { type: types.FETCH_WARDS_REQUEST },
                        {
                            type: types.FETCH_WARDS_SUCCESS,
                            data: {
                                wards: {
                                    wardID1: {
                                        building: 'Humphrey Booth Building',
                                        floor: 0,
                                        name: 'Acute Neurology Unit'
                                    },
                                    wardID2: {
                                        building: 'Humphrey Booth Building',
                                        floor: 1,
                                        name: 'Acute Neurology Unit'

                                    }
                                }
                            }
                        }
                    ];

                    return store.dispatch(actions.fetchWards())
                        .then(() => {
                            expect(store.getActions()).to.eql(expectedActions);
                        });
                });
            });
        });
    });
    describe('PATIENT ACTIONS', () => {
        describe('getPatientsByWard', () => {
            describe('fetchPatientsByWardRequest', () => {
                it('should be a function', () => {
                    expect(actions.fetchPatientsByWardRequest).to.be.a('function');
                });
                it('returns the right action', () => {
                    expect(actions.fetchPatientsByWardRequest()).to.eql({
                        type: types.FETCH_PATIENTS_BY_WARD_REQUEST
                    });
                });
            });
            describe('fetchPatientByWardsSuccess', () => {
                it('should be a function', () => {
                    expect(actions.fetchPatientsByWardSuccess).to.be.a('function');
                });
                it('returns the right action', () => {
                    expect(actions.fetchPatientsByWardSuccess('data')).to.eql({
                        type: types.FETCH_PATIENTS_BY_WARD_SUCCESS,
                        data: 'data'
                    });
                });
            });
            describe('fetchPatientByWardsFailed', () => {
                it('should be a function', () => {
                    expect(actions.fetchPatientsByWardFailed).to.be.a('function');
                });
                it('returns the right action', () => {
                    expect(actions.fetchPatientsByWardFailed('error')).to.eql({
                        type: types.FETCH_PATIENTS_BY_WARD_FAILED,
                        data: 'error'
                    });
                });
            });
            describe('ASYNC functions', () => {
                describe('fetchPatientsByWard', () => {
                    it('should be a function', () => {
                        expect(actions.fetchPatientsByWard).to.be.a('function');
                    });
                    it('returns FETCH_PATIENT_BY_WARD_SUCCESS if fetchPatientsByWard has been done', () => {
                        nock('https://us-central1-live-northcoders-nhs-app.cloudfunctions.net');
                        fetchMock.getOnce('/getPatientsByWard?ward=Acute Nuerology Unit', mockPatientsByWard);


                        const store = mockStore({
                            data: {}
                        });

                        const expectedActions = [
                            { type: types.FETCH_PATIENTS_BY_WARD_REQUEST },
                            {
                                type: types.FETCH_PATIENTS_BY_WARD_SUCCESS,
                                data: mockPatientsByWard
                            }
                        ];

                        return store.dispatch(actions.fetchPatientsByWard('Acute Neurology Unit'))
                            .then(() => {
                                expect(store.getActions()).to.eql(expectedActions);
                            });

                    });
                });
            });
        });
        describe('getPatientsByName', () => {
            describe('fetchPatientsByNameRequest', () => {
                it('should be a function', () => {
                    expect(actions.fetchPatientsByNameRequest).to.be.a('function');
                });
                it('returns the correct action', () => {
                    expect(actions.fetchPatientsByNameRequest()).to.eql({
                        type: types.FETCH_PATIENTS_BY_NAME_REQUEST
                    });
                });
            });
            describe('fetchPatientByNameSuccess', () => {
                it('should be a function', () => {
                    expect(actions.fetchPatientsByNameSuccess).to.be.a('function');
                });
                it('returns the right action', () => {
                    expect(actions.fetchPatientsByNameSuccess('data')).to.eql({
                        type: types.FETCH_PATIENTS_BY_NAME_SUCCESS,
                        data: 'data'
                    });
                });
            });
            describe('fetchPatientByNameFailed', () => {
                it('should be a function', () => {
                    expect(actions.fetchPatientsByNameFailed).to.be.a('function');
                });
                it('returns the right action', () => {
                    expect(actions.fetchPatientsByNameFailed('error')).to.eql({
                        type: types.FETCH_PATIENTS_BY_NAME_FAILED,
                        data: 'error'
                    });
                });
            });
            describe('ASYNC functions', () => {
                describe('fetchPatientsByName', () => {
                    it('should be a function', () => {
                        expect(actions.fetchPatientsByName).to.be.a('function');
                    });
                    it('returns FETCH_PATIENT_BY_NAME_SUCCESS if fetchPatientsByName has been done', () => {
                        nock('https://us-central1-live-northcoders-nhs-app.cloudfunctions.net');
                        fetchMock.getOnce('/patientsByName?name=hilma', mockPatientsByName);


                        const store = mockStore({
                            data: {}
                        });

                        const expectedActions = [
                            { type: types.FETCH_PATIENTS_BY_NAME_REQUEST },
                            {
                                type: types.FETCH_PATIENTS_BY_NAME_SUCCESS,
                                data: mockPatientsByName
                            }
                        ];

                        return store.dispatch(actions.fetchPatientsByName('hilma'))
                            .then(() => {
                                expect(store.getActions()).to.eql(expectedActions);
                            });

                    });
                });
            });
        });
    });
});