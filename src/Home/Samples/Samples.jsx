import './Samples.scss'
import Carousal from './Carousal'
import straps from '../../assets/left-straps.png'
import logo1 from '../../assets/logo-sample1.png'
import logo2 from '../../assets/logo-sample2.png'
import logo3 from '../../assets/logo-sample3.png'
import logo4 from '../../assets/logo-sample4.png'
import logo5 from '../../assets/logo-sample5.png'
import logo6 from '../../assets/logo-sample6.png'
import logo7 from '../../assets/logo-sample7.png'
import logo8 from '../../assets/logo-sample8.png'
import hair from '../../assets/white-hair.png'
// import { useEffect, useRef } from 'react'


function Samples() {

  return (
    <section className='samples'>
      <div>
        <img className='samples_strap'  src={straps} alt={straps} />
        <div className='samples_heading'>Our Work</div>
      </div>

      <Carousal/>

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