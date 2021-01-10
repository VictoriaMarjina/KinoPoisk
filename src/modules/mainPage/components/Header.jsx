import React from 'react';
import { Link }  from 'react-router-dom';

const Header = () => {
    return (
        <div className={'header'}>
            <div className={'header__logo'}></div>
            <div className={'header__kino-logo'}></div>
            <div className={'header__buttons'}>
                <div className={'header-button home'}>
                    <Link className={'header-link'} to={'/'}>
                        Главная 
                    </Link>
                </div>
                <div className={'header-button about'}>
                    <Link className={'header-link'} to={'/info'}>
                        О Нас
                    </Link>
                </div>
                <div className={'header-button moovies'}>
                    <Link className={'header-link'} to={'/moovies'}>
                        TOП-20🌟
                    </Link>
                </div>
            </div>  
        </div>
    )
}

export default React.memo(Header);