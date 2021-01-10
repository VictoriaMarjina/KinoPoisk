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
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        }
        
        return (
            <div className='carousel'>
                <Slider {...settings}>
                    <div className={'carousel-block'}>
                        <img src={firstSlide} alt={'slide 1'} className={'carousel-slider'}/>
                    </div>
                    <div className={'carousel-block'}>
                        <img src={secondSlide} alt={'slide 2'} className={'carousel-slider'}/>
                    </div>
                    <div className={'carousel-block'}>
                        <img src={thirdSlide} alt={'slide 3'} className={'carousel-slider'}/>
                    </div>
                </Slider>
            </div>
        );
    }
}
