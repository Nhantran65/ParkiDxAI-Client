const REST = 'hospitals';

export const HOSPITAL_PATH = {
    CREATE_HOSPITAL: `${REST}/`,
    DELETE_HOSPITAL: `${REST}/:id`,
    GET_HOSPITAL: `${REST}/:id`,
    GET_HOSPITALS: `${REST}/`,
    UPDATE_HOSPITAL: `${REST}/:id`,
};
