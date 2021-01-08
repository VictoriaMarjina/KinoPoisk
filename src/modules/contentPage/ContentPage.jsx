import React from 'react';
import './contentPageStyles.css';
import * as api from '../../REST';
import Card from './components/Card';


export default class ContentPage extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            moovies: [],
        }
       
        api.getRate().then(res => this.saveInfo(res));
    }

    saveInfo = info => {
        const films  = info.films;
        console.log(films);
        this.setState({
            moovies: films,
        });
        const {
            getInfo
        } = this.props;

        getInfo(films);
    }

    render() {
        const {
            mooviesList
        } = this.props;

        return (
            <div className = {"main-cards-conatiner"}>
                 { 
                     mooviesList.map((film, index) => (
                        <Card key = {index}
                              country = {film.countries[0].country}
                              filmLength = {film.filmLength}
                              genre = {film.genres[0].genre}
                              nameEn = {film.nameEn}
                              nameRu = {film.nameRu}
                              image = {film.posterUrl}
                              rating = {film.rating}
                              year = {film.year}/>
                    ))
                 }
            </div>
        )
    }
}
