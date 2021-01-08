import './mainPageStyles.css';
import React, { Suspense } from 'react';
import Header from './components/Header';
import * as api from '../../REST';
import HomePage from '../homePage';
import InfoPage from '../infoPage';
import ContentPage from '../contentPage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class MainPage extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            isClosed: false
        }
        
        this.getInfo();
    }
    
    getInfo = () => {
        api.getRate().then(res => this.saveInfo(res));
    }

    saveInfo = info => {
        const films  = info.films;
        //console.log(films);
        const {
            getInfo
        } = this.props;

        getInfo(films);
    }

    render() {
        return (
            <Router>
                <Suspense fallback={<div>Страница загружается...</div>}>
                    <Header/>
                    <div className={'curr_page'}>
                        <Switch>
                            <Route path="/" exact component={HomePage}/> 
                            <Route path="/info" component={InfoPage}/>
                            <Route path="/moovies" component={ContentPage}/>
                        </Switch>
                    </div>
                </Suspense>
            </Router>
        );
    }             
}

export default MainPage;