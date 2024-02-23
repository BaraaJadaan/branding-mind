import {Link, Navigate, useNavigate} from "react-router-dom";
import "./Intro.scss"
import intro from '../assets/intro.mp4'
import gsap from 'gsap'
import { useEffect } from 'react';

function Intro() {
  const navigate = useNavigate();
  const handleVideoEnd = () => {
    navigate("/brandingmind/home");
  };
  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.set(".enter", {xPercent: 0, yPercent: 150});

      let xTo = gsap.quickTo(".enter", "x", {duration: 0.6, ease: "power3"}),
          yTo = gsap.quickTo(".enter", "y", {duration: 0.6, ease: "power3"});

      window.addEventListener("mousemove", e => {
        xTo(e.pageX);
        yTo(e.pageY);
      });

    });
    return () => ctx.revert();
  }, []);
  return (
    <div className="vid-background">
      <div className="bg-video">
        <video onEnded={handleVideoEnd} className="bg-video__content" autoPlay muted playsinline>
          <source src={intro} type="video/mp4"/>
        </video>
      </div>
      <a href={`/brandingmind/home`} className="enter">Enter Site</a>

    </div>
  )
}

export default Intro