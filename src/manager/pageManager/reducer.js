import constants from '../../constants';

const initialState = {
        currentPage: 'contentPage',
        mooviesList: []
}

 const pageReducer = (state = initialState, action) => {
    switch (action.type) {
        case constants.OPEN_HOME_PAGE:
            return {  
                ...state,
                currentPage: 'homePage',
            };
        case constants.OPEN_INFO_PAGE:
            return {  
                ...state,
                currentPage: 'infoPage',
            };
        case constants.OPEN_CONTENT_PAGE:
            return {  
                ...state,
                currentPage: 'contentPage',
            };    
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
