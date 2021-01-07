import React from 'react';
import HomePage from '../homePage';
import ContentPage from '../contentPage';
import InfoPage from '../infoPage';
import './mainPageStyles.css';


class MainPage extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            currentPage: 'infoPage',
        };
    }    
    
    returnCurrentPage = () => {
        const { currentPage } = this.props;
        console.log(currentPage);
        if(currentPage === 'homePage'){
            return <HomePage/>
        } else if (currentPage === 'infoPage'){
            return <InfoPage/>
        } else {
            return <ContentPage/>
        }
    }

    // handleClick = event => {
    //     if ()
    // }

    render() {
        return (
            <>
                <div className={'header'}>
                        <div className={'logo'}></div>
                        <div className={'kino_logo'}></div>
                        <div className={'header-right'}>
                            <div name={'home'} className={'active'} children={'Home'} onClick={this.handleClick}></div>
                            <div name={'about'} children={'About'} onClick={this.handleClick}></div>
                            <div name={'moovies'} children={'Moovies'} onClick={this.handleClick}></div>
                        </div>
                        </div>
                <div className={'curr_page'}>
                    {this.returnCurrentPage()}
                </div>
            </>
        );
    }
                
}

export default MainPage;