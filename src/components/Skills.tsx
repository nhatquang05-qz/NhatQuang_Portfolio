import { motion, type Variants } from 'framer-motion';
import { SiHtml5, SiCss, SiJavascript, SiTypescript, SiReact, SiNodedotjs, SiExpress, SiMysql, SiMongodb, SiGit, SiFigma, SiPostman, SiSocketdotio } from 'react-icons/si';
import { FaServer, FaCode, FaTools } from 'react-icons/fa';
import { VscVscode } from 'react-icons/vsc';
import '../assets/styles/Skills.css';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <FaCode />,
      skills: [
        { name: 'HTML5', icon: <SiHtml5 color="#E34F26" /> },
        { name: 'CSS3', icon: <SiCss color="#1572B6" /> },
        { name: 'JavaScript', icon: <SiJavascript color="#F7DF1E" /> },
        { name: 'TypeScript', icon: <SiTypescript color="#3178C6" /> },
        { name: 'ReactJS', icon: <SiReact color="#61DAFB" /> },
        { name: 'React Native', icon: <SiReact color="#61DAFB" /> }
      ]
    },
    {
      title: "Backend Development",
      icon: <FaServer />,
      skills: [
        { name: 'Node.js', icon: <SiNodedotjs color="#339933" /> },
        { name: 'Express', icon: <SiExpress color="#FFFFFF" /> },
        { name: 'MySQL', icon: <SiMysql color="#4479A1" /> },
        { name: 'MongoDB', icon: <SiMongodb color="#47A248" /> },
        { name: 'Socket.io', icon: <SiSocketdotio color="#FFFFFF" /> },
        { name: 'RESTful APIs', icon: <FaServer color="#00f2fe" /> }
      ]
    },
    {
      title: "Tools & Others",
      icon: <FaTools />,
      skills: [
        { name: 'VS Code', icon: <VscVscode color="#007ACC" /> },
        { name: 'Git/Github', icon: <SiGit color="#F05032" /> },
        { name: 'Figma', icon: <SiFigma color="#F24E1E" /> },
        { name: 'Postman', icon: <SiPostman color="#FF6C37" /> },
        { name: 'Axios', icon: <SiJavascript color="#5A29E4" /> }
      ]
    }
  ];

  return (
    <section id="skills" className="section-container">
      <motion.h2 
        className="section-title"
        variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
      >
        Kỹ Thuật & Công Nghệ
      </motion.h2>

      <div className="skills-layout">
        {skillCategories.map((category, catIndex) => (
          <motion.div 
            key={catIndex} 
            className="skill-category-card"
            variants={fadeUp}
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, margin: "-100px" }}
          >
            <h3 className="category-title">
              <span className="category-icon">{category.icon}</span>
              {category.title}
            </h3>
            <motion.div 
              className="skills-grid"
              variants={staggerContainer}
            >
              {category.skills.map((skill, index) => (
                <motion.div key={index} className="skill-card" variants={fadeUp}>
                  <span className="skill-icon">{skill.icon}</span>
                  <span className="skill-name">{skill.name}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;