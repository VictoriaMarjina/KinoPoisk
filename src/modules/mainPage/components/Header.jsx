import React from 'react';
import {Link}  from 'react-router-dom';

const Header = () => {
    return (
        <>
        <div className={'logo'}></div>
        <div className={'kino_logo'}></div>
        <div className={'header-right'}>
            <div className={'home'}>
                <Link clssName={'header-link'} to={'/'}>
                    Home
                </Link>
            </div>
            <div className={'about'}>
                <Link clssName={'header-link'} to={'/info'}>
                    About
                </Link>
            </div>
            <div className={'moovies'}>
                <Link clssName={'header-link'} to={'/moovies'}>
                    TOP-20 "\u2B50"
                </Link>
            </div>
        </div>  
        </>
    )
}

export default React.memo(Header);