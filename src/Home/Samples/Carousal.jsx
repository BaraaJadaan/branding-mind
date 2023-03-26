import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import './Carousal.scss';
import React, { Component } from 'react';

export default class SwipeToSlide extends Component {
  render() {
    const settings = {
      className: 'carousal',
      infinite: true,
      slidesToShow: 4,
      dots: true,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true,
      swipeToSlide: true, 
      arrows : false,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 1,
            infinite: true,
            dots: false
          }
        },
        
      ]
    };
    return (
      <div>
        <Slider {...settings}>
            <div className="pad carousal_container1">
                <div className="image-gradient1"/>
                {/* <div className='slide-title'>Mentos</div> */}
            </div>
            <div className="pad carousal_container2">
                <div className="image-gradient2"/>
                {/* <div className='slide-title'>Chupa Chups</div> */}
            </div>
            <div className="pad carousal_container3">
                <div className="image-gradient3" />
                {/* <div className='slide-title'>Centerfruit</div> */}
            </div>
            <div className="pad carousal_container4">
                <div className="image-gradient4" />
                {/* <div className='slide-title'>Arabian Oud</div> */}
            </div>
            <div className="pad carousal_container1">
                <div className="image-gradient1"/>
                {/* <div className='slide-title'>Mentos</div> */}
            </div>
            <div className="pad carousal_container2">
                <div className="image-gradient2"/>
                {/* <div className='slide-title'>Chupa Chups</div> */}
            </div>
            <div className="pad carousal_container3">
                <div className="image-gradient3" />
                {/* <div className='slide-title'>Centerfruit</div> */}
            </div>
            <div className="pad carousal_container4">
                <div className="image-gradient4" />
                {/* <div className='slide-title'>Arabian Oud</div> */}
            </div>
            
        </Slider>
    </div>
    );
  }
}
