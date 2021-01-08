import constants from '../../constants';

export const closeCard = payload => ({
    type: constants.CLOSE_CARD,
    payload,
});

