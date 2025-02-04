import React from "react";
import { PieChart, Pie, Cell, Tooltip } from "recharts";
import { FaHtml5, FaCss3Alt, FaJs, FaPhp, FaReact, FaNodeJs, FaDocker, FaJenkins, FaJava, FaPython, FaGitAlt } from "react-icons/fa";
import { SiCplusplus, SiMysql, SiExpress } from "react-icons/si";
import { FcLinux } from "react-icons/fc";
import "../styles/Skills.css";

const skills = [
    { name: "HTML", percentage: 75, color: "#E34F26", icon: <FaHtml5 className="icon html" /> },
    { name: "CSS", percentage: 50, color: "#1572B6", icon: <FaCss3Alt className="icon css" /> },
    { name: "JavaScript", percentage: 60, color: "#F7DF1E", icon: <FaJs className="icon js" /> },
    { name: "React", percentage: 60, color: "#61DAFB", icon: <FaReact className="icon react" /> },
    { name: "Node.js", percentage: 40, color: "#339933", icon: <FaNodeJs className="icon node" /> },
    { name: "PHP", percentage: 50, color: "#777BB4", icon: <FaPhp className="icon php" /> },
    { name: "C ++", percentage: 25, color: "#005697", icon: <SiCplusplus className="icon cplusplus" /> },
    { name: "Java", percentage: 25, color: "#E61F24", icon: <FaJava className="icon java" /> },
    { name: "Python", percentage: 25, color: "#000000", icon: <FaPython className="icon python" /> },
    { name: "SQL", percentage: 60, color: "#005D88", icon: <SiMysql  className="icon sql" /> },
    { name: "Docker", percentage: 75, color: "#2391E6", icon: <FaDocker className="icon docker" /> },
    { name: "Express", percentage: 40, color: "#F7DF1E", icon: <SiExpress  className="icon express" /> },
    { name: "git", percentage: 80, color: "#000000", icon: <FaGitAlt  className="icon git" /> },
    { name: "Jenkins", percentage: 35, color: "#000000", icon: <FaJenkins className="icon jenkins" /> },
    { name: "Linux", percentage: 80, color: "#000000", icon: <FcLinux   className="icon linux" /> },

];

export const Skills = () => {
    return (
        <div className="skills-container">
            <h2 className="title">Mes Compétences</h2>
            <div className="skills-grid">
                {skills.map((skill, index) => (
                    <div key={index} className="skill-card">
                        <div className="icon-container">{skill.icon}</div>

                        <PieChart width={80} height={80}>
                            <Pie
                                data={[
                                    { value: skill.percentage },
                                    { value: 100 - skill.percentage },
                                ]}
                                cx={40}
                                cy={40}
                                innerRadius={20}
                                outerRadius={35}
                                startAngle={90}
                                endAngle={450}
                                dataKey="value"
                            >
                                <Cell fill={skill.color} />
                                <Cell fill="#E5E7EB" />
                            </Pie>
                            <Tooltip />
                        </PieChart>

                        <div className="skill-info">
                            <h3>{skill.name}</h3>
                            <p>{skill.percentage}% de maîtrise</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
