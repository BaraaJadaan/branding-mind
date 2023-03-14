import './Goals.scss'
import straps from '../../assets/white-straps.png'

function Goals() {
  return (
    <section className='goals'>
      <div className='goals_heading'>Our Goals</div>
      <img className='goals_straps' src={straps} alt="straps" />
      <div className='goals_grid'>
        <p className='goals_grid--disc'>Expertise and experience to develop a comprehensive branding strategy.</p>
        <p className='goals_grid--disc'>Creative thinking to upraise your brand to a different level.</p>
        <p className='goals_grid--disc'>Consistency across all your marketing channels, including your website, social media, and advertising.</p>
        <p className='goals_grid--disc'>Design identity that leads your segmentation, targeting positioning.</p>
        <p className='goals_grid--disc'>Differentiate your business from competitors, and increase your revenue.</p>
      </div>
    </section>
  )
}

export default Goals