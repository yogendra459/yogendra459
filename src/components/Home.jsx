import { useEffect, useRef, useState, useMemo } from "react";
import yogendra1 from "./yogendra1.jpg";

export default function Home() {
    const homeRef = useRef(null);

    // Memoized roles array to avoid re-creating it on every render
    const roles = useMemo(() => [
        "Web Developer",
        "UI & UX Designer",
        "Full Stack Developer",
        "Software Engineer",
        "MERN Stack Developer",
        "Python Developer",
        "Frontend Developer",
        "Backend Developer",
        "Tech Enthusiast",
        "Problem Solver",
        "Innovative Thinker",
        "AI & ML Enthusiast"
    ], []);

    const [currentRole, setCurrentRole] = useState(roles[0]);
    const [charIndex, setCharIndex] = useState(0);
    const [index, setIndex] = useState(0);

    // Intersection Observer for animations
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("show-3d");
                    } else {
                        entry.target.classList.remove("show-3d");
                    }
                });
            },
            { threshold: 0.2 }
        );

        const elements = homeRef.current.querySelectorAll("h3, h1, p, .Contact-home, .dynamic-text");
        elements.forEach((el) => {
            el.classList.add("hidden-3d");
            observer.observe(el);
        });

        return () => {
            elements.forEach((el) => observer.unobserve(el));
        };
    }, []);

    // Typing animation effect
    useEffect(() => {
        const typingInterval = setInterval(() => {
            if (charIndex < roles[index].length) {
                setCurrentRole(roles[index].substring(0, charIndex + 1));
                setCharIndex((prev) => prev + 1);
            } else {
                clearInterval(typingInterval);
                setTimeout(() => {
                    setCharIndex(0);
                    setIndex((prev) => (prev + 1) % roles.length);
                }, 1500);
            }
        }, 150);

        return () => clearInterval(typingInterval);
    }, [charIndex, index, roles]);  // ✅ Added 'roles' to dependencies to fix ESLint error

    return (
        <div className="home" ref={homeRef}>
            <div className="home-about">
                <h3>Hey, I'm Yogendra Bairwa</h3>
                <h2 className="dynamic-text">
                    I am <span>{currentRole}</span>
                </h2>
                <h1>Full Stack <br /> Developer</h1>
                <p>
                    I am a full-stack and Python developer, transforming ideas into innovative 
                    solutions with clean, efficient, and dynamic code.
                </p>
                <a href="#contact" className="Contact-home">Contact Me</a>
            </div>
            <div className="home-img-1">
                <img src={yogendra1} alt="Yogendra Bairwa" className="home-img floating-img" />
            </div>
        </div>
    );
}
