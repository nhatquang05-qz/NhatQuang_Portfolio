import { motion } from 'framer-motion';
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
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <p className="hero-greeting">Xin chào, tôi là</p>
        <h1 className="hero-name">Dương Nguyễn<br/>Nhật Quang.</h1>
        <h2 className="hero-role">Fullstack Developer.</h2>
        <p className="hero-desc">
          Tôi là một lập trình viên đam mê xây dựng những trải nghiệm web toàn diện. 
          Từ việc thiết kế giao diện UI/UX mượt mà ở Frontend cho đến kiến trúc hệ thống dữ liệu vững chắc ở Backend.
        </p>
        <a onClick={() => scrollTo('projects')} className="btn-primary">Xem Dự Án Của Tôi</a>
      </motion.div>
    </section>
  );
};

export default Hero;