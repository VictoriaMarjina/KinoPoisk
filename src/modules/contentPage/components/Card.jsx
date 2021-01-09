import React from 'react';
import PropTypes from 'prop-types';

const Card = props => {
    console.log(props.willClosed);
    const { nameRu, nameEn, willClosed, image, filmId, closeCard, genre, country, year, filmLength, rating } = props;
    return (
            !willClosed ? 
            <div className={'moovie-card'}>
                <div className='moovie-card__cancel'>
                    <div className='cancel__x' onClick={() => closeCard(filmId)}>x</div>
                </div>
                <img src={image} className='moovie-card__poster' alt='poster' style={{height: '250px', width: '200px'}}></img>
                <p className='moovie-card__name-ru'>{nameRu}</p>
                <p className='moovie-card__name-eng'>{nameEn}</p>
                <p className='moovie-card__genres'>{genre}</p>
                <p className='moovie-card__country'>{country}</p>
                <p className='moovie-card__year'>{year}</p>
                <p className='moovie-card__filmLength'>{filmLength}</p>
                <p className='moovie-card__rating '>{rating}</p>
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
