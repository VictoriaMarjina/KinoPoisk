import './homePageStyles.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import firstSlide from '../../pictures/firstSlide.png';
import thirdSlide from '../../pictures/thirdSlide.png';
import secondSlide from '../../pictures/secondSlide.jpg';
import React, { Component } from "react";

export default class Homepage extends Component {
    render() {
        const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        }
        
        return (
            <div className='Carousel'>
                <Slider {...settings}>
                    <div className={'Carousel-block'}>
                        <img src={firstSlide} alt={'slide 1'} className={'Carousel-slider'}/>
                    </div>
                    <div className={'Carousel-block'}>
                        <img src={secondSlide} alt={'slide 2'} className={'Carousel-slider'}/>
                    </div>
                    <div className={'Carousel-block'}>
                        <img src={thirdSlide} alt={'slide 3'} className={'Carousel-slider'}/>
                    </div>
                </Slider>
            </div>
        );
    }
}
