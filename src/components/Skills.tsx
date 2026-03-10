import { motion, type Variants } from 'framer-motion';
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
  const skillsList = [
    'HTML5', 'CSS3', 'JavaScript (ES6+)', 'TypeScript', 'ReactJS', 'React Native', 
    'Node.js', 'Express', 'MySQL', 'MongoDB', 'RESTful APIs', 'Axios', 'Git/Github', 'Figma', 'Postman'
  ];

  return (
    <section id="skills" className="section-container">
      <motion.h2 
        className="section-title"
        variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
      >
        Kỹ Thuật & Công Nghệ
      </motion.h2>

      <motion.div 
        className="skills-grid"
        variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
      >
        {skillsList.map((skill, index) => (
          <motion.div key={index} className="skill-card" variants={fadeUp}>
            {skill}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;