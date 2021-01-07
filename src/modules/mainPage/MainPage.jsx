import './mainPageStyles.css';
import React from 'react';
import Header from './components/Header';
import HomePage from '../homePage';
import InfoPage from '../infoPage';
import ContentPage from '../contentPage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


class MainPage extends React.PureComponent {

    render() {
        return (
            <Router>
                <div className={'header'}>
                    <Header/>
                </div>
                <div className={'curr_page'}>
                    <Switch>
                        <Route path="/" exact component={HomePage}/>
                        <Route path="/info" component={InfoPage}/>
                        <Route path="/moovies" component={ContentPage}/>
                    </Switch>
                </div>
            </Router>
        );
    }
                
}

export default MainPage;