import './_nav.scss'
import './_hero.scss'
import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import { useRef, useEffect } from "react";
import logo from '../../assets/header-logo.webp'
import moto from '../../assets/moto.webp'
import statue from '../../assets/statue.webp'
import statueOutline from '../../assets/statue-outline.webp'
import statueOlive from '../../assets/statue-olive.webp'
import hand from '../../assets/hand.webp'

gsap.registerPlugin(ScrollTrigger);

function Header() {
    const image = useRef(null);
    useEffect(() => { 
      const el = image.current;
      gsap.to(".parallax", {
        scrollTrigger: {
          scrub: 2
        },
        y: (i, target) => -ScrollTrigger.maxScroll(window) * target.dataset.speed,
        ease: "none"
      });

      const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".section_hero_hand",
        start: "top bottom",
        end: "50% top",
        scrub: 2,
        }
      });
      tl.to(el, {
        x: -200,
        y: 380,
      })

      
    }, [])
    
  return (
    <div >
      <header >
      <nav className='bar'>
        <div>
          <ul className='bar_navigation white'>
            <li class="bar_navigation__item"><a href="#" class="bar_navigation__link">home</a></li>
            <li class="bar_navigation__item"><a href="#" class="bar_navigation__link">about</a></li>
            <li class="bar_navigation__item"><a href="#" class="bar_navigation__link">approach</a></li>
            <li class="bar_navigation__item"><a href="#" class="bar_navigation__link">work</a></li>
            <li class="bar_navigation__item"><a href="#" class="bar_navigation__link">blog</a></li>
            <li class="bar_navigation__item"><a href="#" class="bar_navigation__link">contact</a></li>
          </ul>
        </div>

        <div>
          <img className='bar_logo' src={logo} alt="logo" />
        </div>

        <div className='btn'>
          <a href="">
            <button className='bar_btn bar_btn--gradient bar_btn--animated'>
              Get in touch 
            </button>
          </a>
        </div>
      </nav>
      </header>

      <section  className='hero'>
        <div>
          <img onLoad={()=>ScrollTrigger.refresh()} className='hero_moto1' src={moto} alt={moto} />
        </div>
        <div className='hero_statue'>
          <img data-speed=".3" className='hero_statue--head parallax' src={statue} alt={statue} />
          <img data-speed=".1" className='hero_statue--outline parallax' src={statueOutline} alt={statueOutline} />
          <img data-speed=".2" className='hero_statue--olive parallax' src={statueOlive} alt={statueOlive} />
        </div>
        
        <div className='hero_hand'>
          <img onLoad={()=>ScrollTrigger.refresh()} ref={image} className='hero_hand--img' src={hand} alt={hand} />
        </div>

        <div style={{position: "relative"}} className='disc'>
          <h1 className='hero_moto2 white stop_hand'>Brands built<br/>to <span className='hero_moto2--glow'>glow</span></h1>

          <p  className='hero_par white'>We are a branding agency that operates as a subdivision of Dow Group. Our team of experienced branding experts is dedicated to helping businesses build strong and memorable brands that stand out in a crowded marketplace. We believe that branding is more than just creating a logo or tagline - it's about developing a unique identity that captures the essence of a business and communicates it to the world.</p>
          <a className='hero_more white' href=""><p><br /><br />READ MORE</p></a>
        </div>
      </section>
    </div>
  )
}

export default Header