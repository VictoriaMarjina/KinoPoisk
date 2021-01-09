import constants from '../../constants';

const initialState = {
        mooviesList: [],
}

const pageReducer = (state = initialState, action) => {
    switch (action.type) {
        case constants.SAVE_CONTENT:
            return {  
                ...state,
                mooviesList: action.payload,
            };  
        case constants.CLOSE_CARD:
            return {  
                ...state,
                mooviesList: state.mooviesList.map(film => film.filmId === action.payload ? { ...film, willClosed: true } : film)  
            };      
        default:
            return state;
    }
}

export default pageReducer;
