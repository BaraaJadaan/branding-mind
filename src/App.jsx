import './App.scss'
import Intro from './Intro/Intro'
import Home from './Pages/Home'
// import './locomotive-scroll.css'
// import LocomotiveScroll from 'locomotive-scroll';
// import { useEffect } from "react";
// import gsap from 'gsap'

function App() {
  // useEffect(() => {
  //   new LocomotiveScroll({
  //     el: document.querySelector('[data-scroll-container]'),
  //     smooth: true
  //   });
  return (
    <div >
      <Home className="App" ></Home>
    </div>
  )
}

export default App
