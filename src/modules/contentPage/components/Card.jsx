import React from 'react';
import PropTypes from 'prop-types';

const Card = props => {
    const { nameRu, nameEn, willClosed, image, filmId, closeCard, genre, country, year, filmLength, rating } = props;
    
    return (
            !willClosed ? 
            <div className={'Moovie-card'}>
                <div className={'Moovie-card__cancel'}>
                    <div className={'Cancel__x'} onClick={() => closeCard(filmId)}>x</div>
                </div>
                <img src={image} className={'Moovie-card__poster'} alt={'Poster'}></img>
                <p className={'Moovie-card__info Name-ru'}>{nameRu}</p>
                <p className={'Moovie-card__info Name-eng'}>{nameEn}</p>
                <p className={'Moovie-card__info Genres'}>Жанр: {genre}</p>
                <p className={'Moovie-card__info Country'}>Страна: {country}</p>
                <p className={'Moovie-card__info Year'}>Год выпуска: {year}</p>
                <p className={'Moovie-card__info FilmLength'}>Продолжительность: {filmLength}</p>
                <p className={'Moovie-card__info Rating'}>{rating}🌟</p>
            </div> : null
    );
};

export default React.memo(Card);

Card.propTypes = {
    year: PropTypes.string,
    genre: PropTypes.string,
    nameRu: PropTypes.string,
    nameEn: PropTypes.string,
    filmId: PropTypes.number,
    rating: PropTypes.string,
    country: PropTypes.string,
    closeCard: PropTypes.func,
    willClosed: PropTypes.bool,
    filmLength: PropTypes.string,
};
