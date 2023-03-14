import './Samples.scss'
import straps from '../../assets/left-straps.png'
import catalog1 from '../../assets/catalog1.png'
import catalog2 from '../../assets/catalog2.png'
import catalog3 from '../../assets/catalog3.png'
import catalog4 from '../../assets/catalog4.png'
import logo1 from '../../assets/logo-sample1.png'
import logo2 from '../../assets/logo-sample2.png'
import logo3 from '../../assets/logo-sample3.png'
import logo4 from '../../assets/logo-sample4.png'
import logo5 from '../../assets/logo-sample5.png'
import logo6 from '../../assets/logo-sample6.png'
import logo7 from '../../assets/logo-sample7.png'
import logo8 from '../../assets/logo-sample8.png'
import hair from '../../assets/white-hair.png'
import { useEffect, useRef } from 'react'


function Samples() {
  const outer = useRef(null);
  const inner = useRef(null);
  let pressed = false;
  let startX;
  let x;
  const checkBoundary = () => {
    let outerBo = outer.current.getBoundingClientRect();
    let innerBo = inner.current.getBoundingClientRect();

    if (parseInt(inner.current.style.left) > 0) {
        inner.current.style.left = "0px";
    }

    if (innerBo.right < outerBo.right) {
        inner.current.style.left = `-${innerBo.width - outerBo.width}px`;
    }
  };

  useEffect(() => {
    
    outer.current.addEventListener('mousedown', (e) => {
      pressed = true;
      startX = e.offsetX - inner.current.offsetLeft;
      outer.current.style.cursor = "grabbing";
    })
  
    outer.current.addEventListener("mouseenter", () => {
      outer.current.style.cursor = "grab";
    });
  
    outer.current.addEventListener("mouseup", () => {
      outer.current.style.cursor = "grab";
      pressed = false;
    });
  
    outer.current.addEventListener("mousemove", (e) => {
      if (!pressed) return;
      e.preventDefault();
      
      x = e.offsetX;
      inner.current.style.left = `${x - startX}px`;
      // console.log(e);
    });

  outer.current.addEventListener("mousemove", () => {
    checkBoundary();
});

  },[])
  

  return (
    <section className='samples'>
      <div>
        <img className='samples_strap'  src={straps} alt={straps} />
        <div className='samples_heading'>Our Work</div>
      </div>

      <div className='samples_scrollable'>
        <div ref={outer} class="slider-container">
          <div ref={inner} class="inner-slider">
            <img className="pseudo-item" src={catalog1} alt="catalog1" />
            <img className="pseudo-item" src={catalog2} alt="catalog2" />
            <img className="pseudo-item" src={catalog3} alt="catalog3" />
            <img className="pseudo-item" src={catalog1} alt="catalog1" />
            <img className="pseudo-item" src={catalog2} alt="catalog2" />
            <img className="pseudo-item" src={catalog3} alt="catalog3" />
          </div>
        </div>
        <div class="pseduo-track"></div>
      </div>

      <div className='samples_logos'>
        <h1 className='samples_logos--title'>
          sample from our work
        </h1>
        <div className='samples_logos_grid'>
          <img class="samples_logos_grid--logo" src={logo1} alt="logo1" />
          <img class="samples_logos_grid--logo" src={logo2} alt="logo2" />
          <img class="samples_logos_grid--logo" src={logo3} alt="logo3" />
          <img class="samples_logos_grid--logo" src={logo4} alt="logo4" />
          <img class="samples_logos_grid--logo" src={logo5} alt="logo5" />
          <img class="samples_logos_grid--logo" src={logo6} alt="logo6" />
          <img class="samples_logos_grid--logo" src={logo7} alt="logo7" />
          <img class="samples_logos_grid--logo" src={logo8} alt="logo8" />
        </div>
      </div>
        <img className='samples_hair' src={hair} alt="hair" />
    </section>

  )
}

export default Samples