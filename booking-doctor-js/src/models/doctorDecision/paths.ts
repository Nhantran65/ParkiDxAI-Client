const REST = 'doctor-decisions';

export const DOCTOR_DECISION_PATH = {
    CREATE_DOCTOR_DECISION: `${REST}/`,
    DELETE_DOCTOR_DECISION: `${REST}/:id`,
    GET_DOCTOR_DECISION: `${REST}/:id`,
    GET_DOCTOR_DECISIONS: `${REST}`,
    UPDATE_DOCTOR_DECISION: `${REST}/:id`,
    GET_DOCTOR_DECISION_BY_EXAMINATION_ID: `${REST}/by-exam/:examinationId`,
};
