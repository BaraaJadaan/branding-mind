import './Services.scss'
import blend from '../../assets/darker-bg.png'
import flower from '../../assets/flower.png'
import blueStrap from '../../assets/blue-strap.png'
import service1 from '../../assets/group1.png'
import service2 from '../../assets/group2.png'
import service3 from '../../assets/group3.png'
import stroks from '../../assets/right-stroks2.png'
import circle from '../../assets/circle.png'
import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import { useEffect } from 'react'
gsap.registerPlugin(ScrollTrigger);

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
    title: "Brand messaging",
    description: "Naming a business or service is more than just coming up with a catchy name; it's about creating a brand identity that resonates with your target audience and sets you apart from your competitors. "
  },
];

function Services() {
  useEffect(() => {
    
    let ctx = gsap.context(() => {
    let panelsContainer = document.querySelector(".carousal_container")
    const panels = gsap.utils.toArray(".carousal_container");
    
    let circle = document.querySelector(".services_circle");
    
    const slider = gsap.timeline({
      scrollTrigger: {
        trigger: ".services",
        pin: true,
        start: "35 0",
        scrub: 2,
        end: () =>  - (-panelsContainer.offsetWidth - innerWidth - innerWidth)
      }
    });

    const cir = gsap.timeline({
      scrollTrigger: {
        trigger: ".services",
        start: '35 0',
        scrub: 2,
        end: () =>  - (-panelsContainer.offsetWidth - innerWidth - innerWidth)
      },
    });

    slider.to(panels,{ xPercent: -100 * ( panels.length - 1 ) });
    cir.to(circle, { xPercent: +100 * ( panels.length - 1 ) });

    function installMediaQueryWatcher(mediaQuery, layoutChangedCallback) {
      var mql = window.matchMedia(mediaQuery);
      mql.addEventListener('change', (e) => layoutChangedCallback(e.matches));
      layoutChangedCallback(mql.matches);
    }

    installMediaQueryWatcher("(min-width: 1919px)", (matches) => {
      
      if (matches) {
        const slider = gsap.timeline({
          scrollTrigger: {
            trigger: ".services",
            pin: true,
            start: "-7 0",
            scrub: 2,
            end: () =>  - (-panelsContainer.offsetWidth - innerWidth - innerWidth)
          }
        });

        const cir = gsap.timeline({
          scrollTrigger: {
            trigger: ".services",
            start: '-7 0',
            scrub: 2,
            end: () =>  - (-panelsContainer.offsetWidth - innerWidth - innerWidth)
          },
        });

        slider.to(panels,{ xPercent: -100 * ( panels.length - 1 ) });
        cir.to(circle, { xPercent: +100 * ( panels.length - 1 ) });

      }
    });
    installMediaQueryWatcher("(max-width: 1200px)", (matches) => {
      
      if (matches) {
        slider.kill();
        cir.kill();
      } 
    });

   

  });
    return () => ctx.revert();
  }, []);
  
  return (
    <div  className='services'>
      <div className='strokes-container'>
            <img className='strokes-container_blend' src={blend} alt={blend} />
            <img className='strokes-container_strap' src={blueStrap} alt={blueStrap} />
            <img className='strokes-container_flower' src={flower} alt={flower} />
      </div>
      <div>
        <div className='services_heading-1'>What we do</div>
      </div>

      <section className='services_carousal'>
      {data.map((item, index) => (
        <div  key={index}>
          <div  className='carousal_container'>
            <img className='carousal_container--img' src={item.image} alt={item.title} />
            <div className='carousal_container_info'>
              <div className='carousal_container--num'>{item.number}</div>
              <h2 className='carousal_container--title'>{item.title}</h2>
              <p className='carousal_container--disc'>{item.description}</p>
            </div>
          </div>
        </div>
      ))}
      </section>
      <div className='services_numbers_container'>
        <p className='services_numbers'> <img className='services_circle' src={circle} alt="circle" />01 &nbsp;&nbsp;02 &nbsp;&nbsp;03 &nbsp;&nbsp; </p> 
      </div>
      <div className='more-strap' >
        <a className='more-strap--link' href="">VIEW WORK</a>
        <img className='more-strap--img' src={stroks} alt={stroks} />
      </div>
    </div>
  )
}

export default Services