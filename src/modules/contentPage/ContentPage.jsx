import React from 'react';
import './contentPageStyles.css';
import Card from './components/Card';

class ContentPage extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            isClosed: false
        }
    }

    closeCard = event => {
        console.log(event.target);
        const { id } = event.target;
        console.log(id);
        event.preventDefault();

        const { 
            closeCard 
        } = this.props;

        closeCard(id);
    }
    
    render() {
        const {
            mooviesList
        } = this.props;
        
        console.log(mooviesList);
        return (
            <div className={"main-cards-conatiner"}>
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
                              func={this.closeCard}
                              isClosed={film.isClosed}/>
                    ))
                 }
            </div>
        )
    }
}

export default ContentPage;
