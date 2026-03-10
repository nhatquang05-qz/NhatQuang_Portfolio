import { motion, type Variants } from 'framer-motion';
import { FaUserAlt, FaEnvelope, FaPhone, FaMapMarkerAlt, FaGraduationCap, FaLanguage } from 'react-icons/fa';
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
            Xin chào! Cảm ơn bạn đã ghé thăm góc nhỏ của tôi. Tôi sinh năm 2005 và hiện đang là sinh viên tại Đại học Công nghệ Thông tin - ĐHQG TP.HCM.
          </p>
          <p>
            Với tư duy logic, khả năng tự học cao và nền tảng Tiếng Anh vững chắc, tôi luôn sẵn sàng đối mặt với các bài toán khó trong lập trình. Ngoài những lúc code, tôi thường tìm cảm hứng qua việc nghe nhạc, xem phim, du lịch và chơi Billards.
          </p>
          
          <ul className="info-list">
            <li><FaUserAlt /> 24/12/2005 - Nam</li>
            <li><FaMapMarkerAlt /> Thành phố Hồ Chí Minh</li>
            <li><FaGraduationCap /> Đại học Công nghệ thông tin – ĐHQG HCM</li>
            <li><FaLanguage /> TOEIC 850/990 & Tiếng Việt bản xứ</li>
            <li><FaEnvelope /> duongnguyennhatquang@gmail.com</li>
            <li><FaPhone /> 0787 808 010</li>
          </ul>
        </motion.div>

        <motion.div 
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
          style={{ display: 'flex', justifyContent: 'center' }}
        >
          <div style={{ fontSize: '15rem', color: 'rgba(0, 242, 254, 0.2)' }}>
            <FaUserAlt />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;