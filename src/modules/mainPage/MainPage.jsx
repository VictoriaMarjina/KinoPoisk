import './mainPageStyles.css';
import React, { Suspense } from 'react';
import Header from './components/Header';
import HomePage from '../homePage';
import InfoPage from '../infoPage';
import ContentPage from '../contentPage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class MainPage extends React.PureComponent {
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