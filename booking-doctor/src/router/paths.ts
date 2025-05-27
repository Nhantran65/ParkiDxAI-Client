import urlJoin from 'url-join';

const ROOT_AUTH = '/';
const ROOT_MAIN = '/';
const ROOT_ADMIN = '/admin';

const ROOT_HOME = urlJoin(ROOT_MAIN, 'home');
const ROOT_PROFESSIONALS = urlJoin(ROOT_MAIN, 'professionals');

const ROOT_DASHBOARD = urlJoin(ROOT_ADMIN, 'dashboard');
const ROOT_HOSPITAL = urlJoin(ROOT_ADMIN, 'hospitals');
const ROOT_DOCTOR = urlJoin(ROOT_ADMIN, 'doctors');
const ROOT_PATIENT = urlJoin(ROOT_ADMIN, 'patients');
const ROOT_EXAMINATION = urlJoin(ROOT_ADMIN, 'examinations');
const ROOT_EXAMINATION_PATIENT = urlJoin(ROOT_MAIN, 'examinations');
const ROOT_PATIENT_INTAKE = urlJoin(ROOT_MAIN, 'patient-intake');

// ----------------------------------------------------------------------
export const PATHS = {
    SELF: ROOT_MAIN,

    HOME: {
        SELF: ROOT_HOME,
    },

    AUTH: {
        SELF: ROOT_AUTH,
        SIGN_IN: urlJoin(ROOT_AUTH, 'sign-in'),
        SIGN_OUT: urlJoin(ROOT_AUTH, 'sign-out'),
    },

    ADMIN: {
        SELF: ROOT_ADMIN,

        HOSPITAL: {
            SELF: ROOT_HOSPITAL,
            MANAGEMENT: ROOT_HOSPITAL,
            DETAILS: urlJoin(ROOT_HOSPITAL, ':hospitalId'),
        },

        DOCTOR: {
            SELF: ROOT_DOCTOR,
            MANAGEMENT: ROOT_DOCTOR,
            DETAILS: urlJoin(ROOT_DOCTOR, ':doctorId'),
        },

        PATIENT: {
            SELF: ROOT_PATIENT,
            MANAGEMENT: ROOT_PATIENT,
            DETAILS: urlJoin(ROOT_PATIENT, ':patientId'),
        },

        DASHBOARD: {
            SELF: ROOT_DASHBOARD,
        },

        EXAMINATION: {
            SELF: ROOT_EXAMINATION,
            MANAGEMENT: ROOT_EXAMINATION,
            DETAILS: urlJoin(ROOT_EXAMINATION, ':examinationId'),
        },
    },

    EXAMINATION: {
        SELF: ROOT_EXAMINATION_PATIENT,
        DETAILS: urlJoin(ROOT_EXAMINATION_PATIENT, ':examinationId'),
    },

    PATIENT_INTAKE: {
        SELF: ROOT_PATIENT_INTAKE,
    },

    PROFESSIONALS: {
        SELF: ROOT_PROFESSIONALS,
        MANAGEMENT: ROOT_PROFESSIONALS,
        DETAILS: urlJoin(ROOT_PROFESSIONALS, ':professionalId'),
    },

    OTHER: {
        NOT_FOUND: urlJoin(ROOT_MAIN, '404'),
        TEST: urlJoin(ROOT_MAIN, 'test'),
    },
};
