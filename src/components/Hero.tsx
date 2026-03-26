import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { SiMongodb } from 'react-icons/si';
import '../assets/styles/Hero.css';

const Hero = () => {
  const [text, setText] = useState('');
  const fullText = "I build things for the web.";

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setText(fullText.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);
    return () => clearInterval(typingInterval);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } }
  };

  return (
    <section id="hero" className="section-container hero-section">
      <div className="hero-content">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="hero-text-wrapper"
        >
          <motion.p variants={itemVariants} className="hero-greeting">Hi, my name is</motion.p>
          <motion.h1 variants={itemVariants} className="hero-name">Dương Nguyễn Nhật Quang.</motion.h1>
          <motion.h2 variants={itemVariants} className="hero-role">
            {text}<span className="cursor-blink">|</span>
          </motion.h2>
          <motion.p variants={itemVariants} className="hero-desc">
            Mình là một lập trình viên. Ngoài việc code ra mình còn thích chơi game, nghe nhạc, xem phim, du lịch và chơi billards nữa.
            Chào mừng bạn đến với góc nhỏ của mình :3
          </motion.p>
          {/* <motion.div variants={itemVariants} className="hero-btns">
            <a onClick={() => scrollTo('projects')} className="btn-primary">Xem Dự Án</a>
            <a onClick={() => scrollTo('contact')} className="btn-outline">Liên Hệ Ngay</a>
          </motion.div> */}
        </motion.div>

        <motion.div className="floating-icon icon-react" animate={{ y: [0, -20, 0], rotate: [0, 360] }} transition={{ repeat: Infinity, duration: 8, ease: "linear" as const }}><FaReact /></motion.div>
        <motion.div className="floating-icon icon-node" animate={{ y: [0, -30, 0] }} transition={{ repeat: Infinity, duration: 5, delay: 1 }}><FaNodeJs /></motion.div>
        <motion.div className="floating-icon icon-mongo" animate={{ y: [0, -25, 0] }} transition={{ repeat: Infinity, duration: 4.5, delay: 2 }}><SiMongodb /></motion.div>
      </div>

      <div className="scroll-indicator" onClick={() => scrollTo('about')}>
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <span>Scroll Down</span>
      </div>
    </section>
  );
};

export default Hero;