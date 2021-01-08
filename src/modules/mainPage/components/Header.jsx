import React from 'react';
import { Link }  from 'react-router-dom';

const Header = () => {
    return (
        <div className={'header'}>
            <div className={'logo'}></div>
            <div className={'kino_logo'}></div>
            <div className={'header-right'}>
                <div className={'home'}>
                    <Link className={'header-link'} to={'/'}>
                        Home
                    </Link>
                </div>
                <div className={'about'}>
                    <Link className={'header-link'} to={'/info'}>
                        About
                    </Link>
                </div>
                <div className={'moovies'}>
                    <Link className={'header-link'} to={'/moovies'}>
                        TOP-20
                    </Link>
                </div>
            </div>  
        </div>
    )
}

export default React.memo(Header);