import './Footer.scss'
import logo from '../../assets/footer-logo.png'

function Footer() {
  return (
    <footer className='footer'>
      <img className='footer_logo' src={logo} alt="logo" />
    </footer>
  )
}

export default Footer