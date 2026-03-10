import { motion } from 'framer-motion';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { SiMongodb } from 'react-icons/si';
import '../assets/styles/Hero.css';

const Hero = () => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="section-container hero-section">
      <div className="hero-content">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="hero-greeting">Hi, my name is</p>
          <h1 className="hero-name">Dương Nguyễn Nhật Quang.</h1>
          <h2 className="hero-role">I build things for the web.</h2>
          <p className="hero-desc">
            Tôi là một lập trình viên Fullstack đam mê xây dựng những hệ thống web toàn diện. 
            Hiện tại, tôi đang tập trung vào việc tạo ra các sản phẩm có trải nghiệm người dùng tối ưu và cấu trúc dữ liệu mạnh mẽ.
          </p>
          <div className="hero-btns">
            <a onClick={() => scrollTo('projects')} className="btn-primary">Xem Dự Án</a>
            <a onClick={() => scrollTo('contact')} className="btn-outline">Liên Hệ Ngay</a>
          </div>
        </motion.div>

        <motion.div className="floating-icon icon-react" animate={{ y: [0, -20, 0] }} transition={{ repeat: Infinity, duration: 4 }}><FaReact /></motion.div>
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