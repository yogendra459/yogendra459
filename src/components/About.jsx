import { useEffect, useRef } from "react";
import ParallaxTilt from "react-parallax-tilt";
import gsap from "gsap";
import yogendra2 from "./yogendra2.jpg";

export default function About() {
  const imgRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      imgRef.current,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 1.5, ease: "power2.out" }
    );
  }, []);
  return (
    <div className="about">
     <div className="about-img-2">
      <ParallaxTilt 
        tiltMaxAngleX={25} 
        tiltMaxAngleY={25} 
        perspective={1200}
        transitionSpeed={1500} 
        scale={1.1}
        glareEnable={true}
        glareMaxOpacity={0.4}
        glareColor="#ffffff"
        glarePosition="bottom"
      >
        <div className="luxury-card" ref={imgRef}>
          <img src={yogendra2} alt="yogendra2" className="about-img" />
        </div>
      </ParallaxTilt>
    </div>
      <div className="about-about">
      <h1>
        About Me
        </h1>
        <h3>Hello, my name is yogendra Bairwa and I am full-stack and python developer</h3>
        
        <p>
        I am a passionate full-stack and Python developer with expertise in building dynamic web applications. I specialize in front-end development using React.js, ensuring seamless user experiences with interactive designs. On the back end, I leverage Python to create scalable and efficient solutions. I am skilled in working with databases, APIs, and cloud technologies, delivering complete end-to-end applications. With a strong problem-solving mindset, I continuously explore new tools and technologies to enhance my development skills. Dedicated to writing clean, efficient code, I am always ready to take on new challenges and build innovative software solutions.
        </p>
      </div>
    </div>
  );
}
