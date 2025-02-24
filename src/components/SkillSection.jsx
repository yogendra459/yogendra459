import React from "react";
import { FaReact, FaPython, FaHtml5, FaCss3Alt, FaBootstrap } from "react-icons/fa";
import { SiDjango, SiJavascript, SiTailwindcss } from "react-icons/si";

const skills = [
  { name: "HTML", icon: <FaHtml5 />, color: "#E34F26", percentage: 95 },
  { name: "CSS", icon: <FaCss3Alt />, color: "#1572B6", percentage: 90 },
  { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E", percentage: 80 },
  { name: "Bootstrap", icon: <FaBootstrap />, color: "#7952B3", percentage: 80 },
  { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#38B2AC", percentage: 70 },
  { name: "React.js", icon: <FaReact />, color: "#61DAFB", percentage: 90 },
  { name: "Python", icon: <FaPython />, color: "#3776AB", percentage: 90 },
  { name: "Django", icon: <SiDjango />, color: "#50C878", percentage: 85 },
];

const SkillSection = () => {
  return (
    <div className="skill-container">
      <h2 className="skill-title">Skills</h2>
      <div className="skill-grid">
        {skills.map((skill, index) => {
          const radius = 30;
          const strokeWidth = 8;
          const circumference = 2 * Math.PI * radius;
          const progress = (skill.percentage / 100) * circumference;

          return (
            <div key={index} className="skill-card">
              <div className="skill-icon" style={{ color: skill.color }}>{skill.icon}</div>
              <p className="skill-name">{skill.name}</p>

              {/* Circular Progress Bar */}
              <svg className="progress-circle" width="80" height="80">
                <circle
                  className="progress-bg"
                  cx="40" cy="40" r={radius}
                  strokeWidth={strokeWidth}
                  stroke="#e0e0e0"
                  fill="none"
                />
                <circle
                  className="progress-bar"
                  cx="40" cy="40" r={radius}
                  strokeWidth={strokeWidth}
                  stroke={skill.color}
                  fill="none"
                  strokeDasharray={circumference}
                  strokeDashoffset={circumference - progress}
                  strokeLinecap="round"
                />
                <text x="40" y="44" textAnchor="middle" fontSize="14" fill="#FFD700" fontWeight="bold">
                  {skill.percentage}%
                </text>
              </svg>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SkillSection;
