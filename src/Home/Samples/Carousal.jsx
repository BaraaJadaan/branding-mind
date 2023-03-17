import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import './Carousal.scss'
import catalog1 from '../../assets/catalog1.png'
import catalog2 from '../../assets/catalog2.png'
import catalog3 from '../../assets/catalog3.png'
import catalog4 from '../../assets/catalog4.png'
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
    };
    return (
      <div>
        <Slider {...settings}>
            <div className="pad carousal_container1">
                <div className="image-gradient1"/>
                {/* <div className='slide-title'>Image</div> */}
            </div>
            <div className="pad carousal_container2">
                <div className="image-gradient2"/>
                {/* <div className='slide-title'>Image</div> */}
            </div>
            <div className="pad carousal_container3">
                <div className="image-gradient3" />
                {/* <div className='slide-title'>Image</div> */}
            </div>
            <div className="pad carousal_container4">
                <div className="image-gradient4" />
                {/* <div className='slide-title'>Image</div> */}
            </div>
            <div className="pad carousal_container1">
                <div className="image-gradient1"/>
                {/* <div className='slide-title'>Image</div> */}
            </div>
            <div className="pad carousal_container2">
                <div className="image-gradient2"/>
                {/* <div className='slide-title'>Image</div> */}
            </div>
            <div className="pad carousal_container3">
                <div className="image-gradient3" />
                {/* <div className='slide-title'>Image</div> */}
            </div>
            <div className="pad carousal_container4">
                <div className="image-gradient4" />
                {/* <div className='slide-title'>Image</div> */}
            </div>
            
        </Slider>
    </div>
    );
  }
}
