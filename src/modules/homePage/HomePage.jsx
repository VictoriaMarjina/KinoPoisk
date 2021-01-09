import './homePageStyles.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import firstSlide from '../../pictures/firstSlide.png';
import secondSlide from '../../pictures/secondSlide.jpg';
import thirdSlide from '../../pictures/thirdSlide.jpg';
import React, { Component } from "react";
import Slider from "react-slick";

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

    };
    return (
        <div className='Carousel'>
          <Slider {...settings}>
            <div>
              <img src={firstSlide} alt={'slide'} className={'Carousel-slider'}/>
            </div>
            <div>
              <img src={secondSlide} alt={'slide'} className={'Carousel-slider'}/>
            </div>
            <div>
              <img src={thirdSlide} alt={'slide'} className={'Carousel-slider'}/>
            </div>
          </Slider>
        </div>
    );
  }
}
