import React from 'react';
import { Link }  from 'react-router-dom';

const Header = () => {
    return (
        <div className={'Header'}>
            <div className={'Header__logo'}></div>
            <div className={'Header__kino-logo'}></div>
            <div className={'Header__buttons'}>
                <div className={'Header-button home'}>
                    <Link className={'Header-link'} to={'/'}>
                        Главная 
                    </Link>
                </div>
                <div className={'Header-button about'}>
                    <Link className={'Header-link'} to={'/info'}>
                        О Нас
                    </Link>
                </div>
                <div className={'Header-button moovies'}>
                    <Link className={'Header-link'} to={'/moovies'}>
                        TOП-20
                    </Link>
                </div>
            </div>  
        </div>
    )
}

export default React.memo(Header);