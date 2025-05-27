const REST = 'statuses';

export const STATUSES_PATH = {
    CREATE_STATUS: `${REST}/`,
    DELETE_STATUS: `${REST}/:id`,
    GET_STATUS: `${REST}/:id`,
    GET_STATUSES: `${REST}/`,
    UPDATE_STATUS: `${REST}/:id`,
};
