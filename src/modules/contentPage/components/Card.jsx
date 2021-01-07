import React from 'react';

const Card = props => {
    return (
        <div className={'moovie-card'}>
            <div className='moovie-card__cancel'>
                <div className='cancel__x'>x</div>
            </div>
            <img src={props.image} className='moovie-card__poster' alt='poster' style={{height: '230px', width: '200px'}}></img>
            <p className='moovie-card__name-ru'>{props.nameRu}</p>
            <p className='moovie-card__name-eng'>{props.nameEn}</p>
            <p className='moovie-card__genres'>{props.genre}</p>
            <p className='moovie-card__country'>{props.country}</p>
            <p className='moovie-card__year'>{props.year}</p>
            <p className='moovie-card__filmLength'>{props.filmLength}</p>
            <p className='moovie-card__rating '>{props.rating}</p>
        </div>    
    )
}

export default React.memo(Card);