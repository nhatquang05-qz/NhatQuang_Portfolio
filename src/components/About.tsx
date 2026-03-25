import { motion, type Variants } from 'framer-motion';
import { FaUserAlt, FaEnvelope, FaPhone, FaMapMarkerAlt, FaGraduationCap, FaLanguage } from 'react-icons/fa';
import profileImg from '../assets/images/profile.jpg'; 
import '../assets/styles/About.css';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
};

const About = () => {
  return (
    <section id="about" className="section-container">
      <motion.h2 
        className="section-title"
        variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
      >
        Về Bản Thân
      </motion.h2>
      
      <div className="about-content">
        <motion.div 
          className="about-text"
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
        >
          <p>
            Hi bro! Cảm ơn bạn đã ghé thăm góc nhỏ của mình. Mình đang là sinh viên năm 3 tại trường Đại học Công nghệ Thông tin - ĐHQG TP.HCM.
          </p>
          <p>
            Ngoài những lúc code, mình thường tìm cảm hứng qua việc nghe nhạc, xem phim, du lịch và chơi Billards.
          </p>
          
          <ul className="info-list">
            <li><FaUserAlt /> 24/12/2005 - Nam</li>
            <li><FaMapMarkerAlt /> Thành phố Hồ Chí Minh</li>
            <li><FaGraduationCap /> Trường Đại học Công nghệ thông tin – ĐHQG HCM</li>
            <li><FaLanguage /> TOEIC L&R 850/990</li>
            <li><FaEnvelope /> duongnguyennhatquang@gmail.com</li>
            <li><FaPhone /> 0787 808 010</li>
          </ul>
        </motion.div>

        <motion.div 
          className="about-image-container"
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
        >
          <div className="image-wrapper">
            <img 
              src={profileImg} 
              alt="Dương Nguyễn Nhật Quang" 
              className="profile-image"
            />
            <div className="image-border"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;