import { setLocale } from 'yup';
import i18n from '../i18next';

setLocale({
    // use constant translation keys for messages without values
    mixed: {
        required: ({ path }) => {
            return i18n.t('mixed.required', { ns: 'jfw.validation', field_name: path });
        },
        notOneOf: custom => {
            const { path, values } = custom;
            const matches: string[] = values.match(/Ref\((.*?)\)/g) || [];
            const fieldNames = matches.map(match => `"${match.slice(4, -1)}"`).join(' or ');

            return i18n.t('mixed.not_one_of', {
                ns: 'jfw.validation',
                field_name: path,
                values: fieldNames,
            });
        },
        oneOf: custom => {
            const { path, values } = custom;
            const matches: string[] = values.match(/Ref\((.*?)\)/g) || [];
            const fieldNames = matches.map(match => `"${match.slice(4, -1)}"`).join(' or ');

            return i18n.t('mixed.one_of', {
                ns: 'jfw.validation',
                field_name: path,
                values: fieldNames,
            });
        },
    },

    string: {
        email: ({ path }) => {
            return i18n.t('string.email', { ns: 'jfw.validation', field_name: path });
        },
        matches: ({ path, regex }) => {
            return i18n.t('string.match', { ns: 'jfw.validation', field_name: path, regex });
        },
        min: ({ path, min }) => {
            return i18n.t('string.min', { ns: 'jfw.validation', field_name: path, min });
        },
        max: ({ path, max }) => {
            return i18n.t('string.max', { ns: 'jfw.validation', field_name: path, max });
        },
        url: ({ path }) => {
            return i18n.t('string.url', { ns: 'jfw.validation', field_name: path });
        },
    },
    // use functions to generate an error object that includes the value from the schema
    number: {
        min: ({ path, min }) => {
            return i18n.t('number.min', { ns: 'jfw.validation', field_name: path, min });
        },
        max: ({ path, max }) => {
            return i18n.t('number.max', { ns: 'jfw.validation', field_name: path, max });
        },
    },
});
