import './contentPageStyles.css';
import Card from './components/Card';
import React from 'react';

class ContentPage extends React.PureComponent {
    render() {
        const {
            mooviesList, 
            closeCard
        } = this.props;
        
        console.log(mooviesList);
        return (
            <div className={"Cards-conatiner"}>
                 { 
                    mooviesList.map((film, index) => (
                        <Card key={index}
                              filmId={film.filmId}
                              country={film.countries[0].country}
                              filmLength={film.filmLength}
                              genre={film.genres[0].genre}
                              nameEn={film.nameEn}
                              nameRu={film.nameRu}
                              image={film.posterUrl}
                              rating={film.rating}
                              year={film.year}
                              closeCard={closeCard}
                              willClosed={film.willClosed}/>
                    ))
                 }
            </div>
        )
    }
}

export default ContentPage;
