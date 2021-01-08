import constants from '../../constants';

export const saveContent = payload => ({
    type: constants.SAVE_CONTENT,
    payload,
});