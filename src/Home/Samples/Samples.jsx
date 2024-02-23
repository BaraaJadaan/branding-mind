import './Samples.scss'
import Carousal from './Carousal'
import straps from '../../assets/left-straps.webp'
import logo1 from '../../assets/logo-sample1.webp'
import logo2 from '../../assets/logo-sample2.webp'
import logo3 from '../../assets/logo-sample3.webp'
import logo4 from '../../assets/logo-sample4.webp'
import logo5 from '../../assets/logo-sample5.webp'
import logo6 from '../../assets/logo-sample6.webp'
import logo7 from '../../assets/logo-sample7.webp'
import logo8 from '../../assets/logo-sample8.webp'
import hair from '../../assets/white-hair.webp'
import blue from '../../assets/blue-hair.webp'


function Samples() {

  return (
    <section className='samples'>
      <div className='samples_strap'>
        <img className='samples_strap--img'  src={straps} alt={straps} />
      </div>
      <div className='end'>
        <img className='blue-img' src={blue} alt="blue" />
      </div>
        <div className='samples_heading'>Our Work</div>

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
      <div className='end'>
        <img className='hair-img' src={hair} alt="hair" />
      </div>
      
    </section>

  )
}

export default Samples