import './contentPageStyles.css';
import Card from './components/Card';
import React from 'react';

class ContentPage extends React.PureComponent {
    render() {
        const {
            closeCard,
            mooviesList, 
        } = this.props;
        
        return (
            <div className={"cards-container"}>
                 { 
                    mooviesList.map((film, index) => (
                        <Card key={index}
                              year={film.year}
                              image={film.posterUrl}
                              genre={film.genres[0].genre}
                              filmId={film.filmId}
                              nameEn={film.nameEn}
                              nameRu={film.nameRu}
                              rating={film.rating}
                              country={film.countries[0].country}
                              closeCard={closeCard}
                              filmLength={film.filmLength}
                              willClosed={film.willClosed}/>
                    ))
                 }
            </div>
        )
    }
}

export default ContentPage;
