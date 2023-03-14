import './Services.scss'
import blend from '../../assets/darker-bg.png'
import flower from '../../assets/flower.png'
import blueStrap from '../../assets/blue-strap.png'
import service1 from '../../assets/group1.png'
import service2 from '../../assets/group2.png'
import service3 from '../../assets/group3.png'
import stroks from '../../assets/right-stroks.png'

function Services() {
  return (
    <section className='services'>
      <div className='strokes-container'>
            <img className='strokes-container_blend' src={blend} alt={blend} />
            <img className='strokes-container_strap' src={blueStrap} alt={blueStrap} />
            <img className='strokes-container_flower' src={flower} alt={flower} />
      </div>
      <div>
        <div className='services_heading-1'>What we do</div>
      </div>

      <div className='services_carousal'>
        <div  className='services_carousal_container'>
          <div>
            <img className='services_carousal_container--img' src={service1} alt={service1} />
          </div>
          <div>
            <h2 className='services_carousal_container--title'>Business Naming</h2>
            <p className='services_carousal_container--disc'>Naming a business or service is more than just coming<br />up with a catchy name; it's about creating a brand<br />identity that resonates with your target audience and<br />sets you apart from your competitors. </p>
          </div>
        </div>

        <div  className='services_carousal_container'>
          <div>
            <img className='services_carousal_container--img' src={service2} alt={service1} />
          </div>
          <div>
            <h2 className='services_carousal_container--title'>Brand strategy<br />development</h2>
            <p className='services_carousal_container--disc'>Developing a comprehensive brand strategy that<br />outlines the key elements of a brand, such as its<br />values, personality, voice, and positioning. </p>
          </div>
        </div>

        <div  className='services_carousal_container'>
          <div>
            <img className='services_carousal_container--img' src={service3} alt={service1} />
          </div>
          <div>
            <h2 className='services_carousal_container--title'>Brand messaging &<br />positioning</h2>
            <p className='services_carousal_container--disc'>Naming a business or service is more than just coming<br />up with a catchy name; it's about creating a brand<br />identity that resonates with your target audience and<br />sets you apart from your competitors. </p>
          </div>
        </div>
      </div>

      <div >
        <a className='services_more' href="">VIEW WORK</a>
        <img className='services_stroks' src={stroks} alt={stroks} />
      </div>
    </section>
  )
}

export default Services