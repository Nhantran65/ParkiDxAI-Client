const REST = 'users';

export const USER_PATH = {
    GET_DOCTORS: `${REST}/doctors`,
    GET_PATIENTS: `${REST}/patients`,
    CREATE_USER: `${REST}`,
    UPDATE_USER: `${REST}/:id`,
    DELETE_USER: `${REST}/:id`,
};
