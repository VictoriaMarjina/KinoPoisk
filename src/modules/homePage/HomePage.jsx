import './homePageStyles.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import firstSlide from '../../pictures/firstSlide.png';
import secondSlide from '../../pictures/secondSlide.jpg';
import thirdSlide from '../../pictures/thirdSlide.png';
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
    }
    return (
        <div className='Carousel'>
          <Slider {...settings}>
            <div className={'Carousel-block'}>
              <img src={firstSlide} alt={'slide'} className={'Carousel-slider'} style={{height:'600px'}}/>
            </div>
            <div className={'Carousel-block'}>
              <img src={secondSlide} alt={'slide'} className={'Carousel-slider'} style={{height:'600px'}}/>
            </div>
            <div className={'Carousel-block'}>
              <img src={thirdSlide} alt={'slide'} className={'Carousel-slider'} style={{height:'600px'}}/>
            </div>
          </Slider>
        </div>
    );
  }
}
