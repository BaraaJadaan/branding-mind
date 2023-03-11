import './App.scss'
import Header from './Home/Header/Header.jsx'
import Services from './Home/Services/Services.jsx'
import Samples from './Home/Samples/Samples.jsx'
import Goals from './Home/Goals/Goals.jsx'
import Footer from './Home/Footer/Footer.jsx'
import { useRef, useEffect } from "react";
import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger);

function App() {
  const container = useRef(null);
    useEffect(() => {
      const el = container.current;
      var height = el.clientHeight;
      gsap.to(el, {
        y: -(height- document.documentElement.clientHeight),
        scrollTrigger: {
          trigger: el,
          start: "top",
          end: "bottom bottom",
          scrub: 2
        }
      });
    }, [])
  return (
    <div ref={container} className="App">
      <Header/>
      <Services/>
      <Samples/>
      <Goals/>
      <Footer/>
    </div>
  )
}

export default App
