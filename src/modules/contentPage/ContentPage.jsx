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

        const moovies = mooviesList;
        const row1 = moovies.slice(0, 4);
        const row2 = moovies.slice(4, 8);
        const row3 = moovies.slice(8, 12);
        const row4 = moovies.slice(12, 16);
        const row5 = moovies.slice(16, 20);

        return (
            <div className = {"main-cards-conatiner"}>
                <div className = {"main-cards-conatiner_row"}>
                 { 
                     row1.map((film, index) => (
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
                   <div className = {"main-cards-conatiner_row"}>
                  {
                     row2.map((film, index) => (
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
                   <div className = {"main-cards-conatiner_row"}>
                 { 
                     row3.map((film, index) => (
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
                   <div className = {"main-cards-conatiner_row"}>
                 { 
                     row4.map((film, index) => (
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
                   <div className = {"main-cards-conatiner_row"}>
                 { 
                     row5.map((film, index) => (
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
            </div>
        )
    }
}
