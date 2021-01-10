import './mainPageStyles.css';
import Header from './components/Header';
import HomePage from '../homePage';
import * as api from '../../REST';
import ContentPage from '../contentPage';
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
const InfoPage = React.lazy(() => import ('../infoPage'));

class MainPage extends React.PureComponent {
    componentDidMount = () => {
        api.getRate().then(res => this.saveInfo(res));
    }

    saveInfo = info => {
        const films  = info.films;
        const { getInfo } = this.props;

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
                    <div className={'footer'}></div>
                </Suspense>
            </Router>
        );
    }             
}

export default MainPage;