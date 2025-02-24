import React from "react";
import { GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

const educationData = [
  {
    id: 1,
    degree: "Bachelor of Technology (B.Tech)",
    field: "Computer Science & Engineering",
    university: "Compucom Institute of Technology and Management,Jaipur",
    year: "2022 - 2026",
    percentage: "7.5 CGPA",
    description: "Focused on Full-Stack Development, Data Structures, and AI/ML.",
  },
  {
    id: 2,
    degree: "Higher Secondary Education",
    field: "Science (PCM)",
    university: "Government Senior Secondary School,Jaipur",
    year: "2021 - 2022",
    percentage: "62%",
    description: "Specialized in Mathematics, Physics, and Computer Science.",
  },
  {
    id: 3,
    degree: "Secondary Education",
    field: "General Science & Mathematics",
    university: "The Daily Public Senior Secondary School,Jaipur",
    year: "2019 - 2020",
    percentage: "84.50%",
    description: "Developed an interest in coding and problem-solving.",
  },
];

const Education = () => {
  return (
    <section className="education-section">
      <h2 className="section-title">🎓 Education</h2>
      <div className="education-list">
        {educationData.map((edu, index) => (
          <motion.div
            key={edu.id}
            className="education-item"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.3, duration: 0.5 }}
          >
            <GraduationCap className="education-icon" size={24} />
            <h3 className="education-degree">{edu.degree}</h3>
            <p className="education-field">{edu.field}</p>
            <p className="education-university">{edu.university}</p>
            <p className="education-year">{edu.year}</p>
            <p className="education-percentage">{edu.percentage}</p>
            <p className="education-description">{edu.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
