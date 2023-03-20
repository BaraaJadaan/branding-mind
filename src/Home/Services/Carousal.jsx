import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import './Carousal.scss';
import './Dots.scss';
import React, { Component } from 'react';
import service1 from '../../assets/group1.png'
import service2 from '../../assets/group2.png'
import service3 from '../../assets/group3.png'
import active1 from '../../assets/active1.png'
import active2 from '../../assets/active1.png'
import active3 from '../../assets/active1.png'
import dot1 from '../../assets/dot1.png'
import dot2 from '../../assets/dot2.png'
import dot3 from '../../assets/dot3.png'

const data = [
  {
    image: service1,
    number: '01',
    title: "Business Naming",
    description: "Naming a business or service is more than just coming up with a catchy name; it's about creating a brand identity that resonates with your target audience and sets you apart from your competitors."
  },
  {
    image: service2,
    number: '02',
    title: "Brand strategy development",
    description: "Developing a comprehensive brand strategy that outlines the key elements of a brand, such as its values, personality, voice, and positioning. "
  },
  {
    image: service3,
    number: '03',
    title: "Brand messaging & positioning",
    description: "Naming a business or service is more than just coming up with a catchy name; it's about creating a brand identity that resonates with your target audience and sets you apart from your competitors. "
  },
];

export default class SwipeToSlide extends Component {
  render() {
    const dotOnClick = () => {};
    const settings = {
      className: 'slider',
      dots: true,
      slidesToShow: 1,
      // autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true,
      
      appendDots: dots => (
        <div >
          <ul className='services-dots' style={{ marginBottom:"30px", marginRight:"300px" }} > {dots} </ul>
        </div>
      ),
      customPaging: i => renderDots(i, dotOnClick, false),
      customActiveDot: i => renderDots(i, dotOnClick, true),
      dotsClass:"slick-dots custom-dots-class",
    };

    const dotImages = [dot1, dot2, dot3];
    const activeDotImages = [active1, active2, active3];
    const renderDots = (index, dotOnClick, isActive) => {
        const imageSrc = isActive ? activeDotImages[index] : dotImages[index];

        return (
        <div >
            <img
              src={imageSrc}
              alt={`Slide ${index}`}
              onClick={() => dotOnClick(index)}
              style={{ width: "60px", height: "auto" }}
            />
        </div>
        );
      };
    return (
      <div className='background'>
        <Slider {...settings}>
        {data.map((item, index) => (
        <div  key={index}>
          <div style={{width:'95rem'}} className='carousal_container'>
            <img className='carousal_container--img' src={item.image} alt={item.title} />
            <div className='carousal_container_info'>
              <div className='carousal_container--num'>{item.number}</div>
              <h2 className='carousal_container--title'>{item.title}</h2>
              <p className='carousal_container--disc'>{item.description}</p>
            </div>
          </div>
        </div>
      ))}
        </Slider>
    </div>
    );
  }
}
