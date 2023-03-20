import './Services.scss'
import blend from '../../assets/darker-bg.png'
import flower from '../../assets/flower.png'
import blueStrap from '../../assets/blue-strap.png'
import stroks from '../../assets/right-stroks.png'
import Carousal from './Carousal'

function Services() {
  return (
    <div className='services'>
      <div className='strokes-container'>
            <img className='strokes-container_blend' src={blend} alt={blend} />
            <img className='strokes-container_strap' src={blueStrap} alt={blueStrap} />
            <img className='strokes-container_flower' src={flower} alt={flower} />
      </div>
      <div>
        <div className='services_heading-1'>What we do</div>
      </div>

        <Carousal/>
      
      <div className='more-strap' >
        <a className='more-strap--link' href="">VIEW WORK</a>
        <img className='more-strap--img' src={stroks} alt={stroks} />
      </div>
    </div>
  )
}

export default Services