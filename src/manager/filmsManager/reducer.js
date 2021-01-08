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
                mooviesList: state.mooviesList.map(film => {
                    if(film.filmId === +action.payload || film.isClosed === false){
                        film.isClosed = false;
                        return film;
                    } else {
                        film.isClosed = true;
                        return film;
                    }
                })
            };       
        default:
            return state;
    }
}

export default pageReducer;
