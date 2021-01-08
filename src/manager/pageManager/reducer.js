import constants from '../../constants';

const initialState = {
        currentPage: 'contentPage',
        mooviesList: []
}

 const pageReducer = (state = initialState, action) => {
    switch (action.type) {
        case constants.SAVE_CONTENT:
            return {  
                ...state,
                mooviesList: action.payload,
            };         
        default:
            return state;
    }
}

export default pageReducer;
