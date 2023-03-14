import './App.scss'
import Header from './Home/Header/Header.jsx'
import Services from './Home/Services/Services.jsx'
import Samples from './Home/Samples/Samples.jsx'
import Goals from './Home/Goals/Goals.jsx'
import Footer from './Home/Footer/Footer.jsx'
import { useEffect } from "react";
import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger);

function App() {
    useEffect(() => {
      
      var container = document.querySelector("#scroll-container");

      var height = container.clientHeight;
      document.body.style.height = height + "px";
      
      gsap.to(container, {
        y: -(height - document.documentElement.clientHeight),
        scrollTrigger: {
          trigger: document.body,
          start: "top top",
          end: "bottom bottom",
          scrub: 2
        }
      });
    }, [])
  return (
    <div  className="App">
      <div id='scroll-container'>
      <Header/>
      <main>
        <Services/>
        <Samples/>
        <Goals/>
      </main>
      <Footer/>
      </div>
    </div>
  )
}

export default App
