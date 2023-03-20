import './Goals.scss'
import gsap from 'gsap'
import straps from '../../assets/white-straps.png'
import { useEffect } from 'react';

function Goals() {
  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.set('.goals_grid--wrab img.goals_grid--img', { yPercent: -50, xPercent: -50 })
  
      gsap.utils.toArray(".goals_grid--wrab").forEach((el) => {
        const image = el.querySelector("img.goals_grid--img"),
        setX = gsap.quickSetter(image, "x", "px"),
        setY = gsap.quickSetter(image, "y", "px"),
        startFollow = () => document.addEventListener("mousemove", align),
        stopFollow = () => document.removeEventListener("mousemove", align),
          fade = gsap.to(image, {
            autoAlpha: 1,
            // ease,
            paused: true,
            onReverseComplete: stopFollow
          });
          const align = (e, image) => {
            gsap.to(image, {
              x: setX(e.clientX),
              y: setY(e.clientY),
              duration: 0.5,
              delay: 0.08 
            });
          };
  
        el.addEventListener("mouseenter", (e) => {
          fade.play();
          startFollow();
          align(e, image);
        });
  
        el.addEventListener("mouseleave", () => {
          fade.reverse();
        });
      });
    });
    return () => ctx.revert(); // <-- CLEANUP!
  }, []);
  return (
    <section className='goals'>
      <div className='goals_heading'>Our Goals</div>
      <img className='goals_straps' src={straps} alt="straps" />
      <div className='goals_grid'>

        <div className='goals_grid--wrab'>
          <p data-title-text className='goals_grid--disc1'>Expertise and experience to develop a comprehensive branding strategy.</p>
          <img className='goals_grid--img' src="https://picsum.photos/id/277/400/400" alt="" />
        </div>

        <div className='goals_grid--wrab'>
          <p className='goals_grid--disc2'>Creative thinking to upraise your brand to a different level.</p>
          <img className='goals_grid--img' src="https://picsum.photos/id/272/400/400" alt="" />
        </div>

        <div className='goals_grid--wrab'>
          <p className='goals_grid--disc3'>Consistency across all your marketing channels, including your website, social media, and advertising.</p>
          <img className='goals_grid--img' src="https://picsum.photos/id/271/400/400" alt="" />
        </div>

        <div className='goals_grid--wrab'>
          <p className='goals_grid--disc4'>Design identity that leads your segmentation, targeting positioning.</p>
          <img className='goals_grid--img' src="https://picsum.photos/id/258/400/400" alt="" />
        </div>
        <div className='goals_grid--wrab'>
          <p className='goals_grid--disc5'>Differentiate your business from competitors, and increase your revenue.</p>
          <img className='goals_grid--img' src="https://picsum.photos/id/255/400/400" alt="" />
        </div>
      </div>
    </section>
  )
}

export default Goals