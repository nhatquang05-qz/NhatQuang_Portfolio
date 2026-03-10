import { motion, type Variants } from 'framer-motion';
import { FaEnvelope, FaPhone, FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
import '../assets/styles/Contact.css';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const Contact = () => {
  return (
    <section id="contact" className="section-container">
      <motion.div 
        className="contact-wrapper"
        variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
      >
        <motion.p className="contact-subtitle" variants={fadeUp}>What's Next?</motion.p>
        <motion.h2 className="contact-title" variants={fadeUp}>Get In Touch</motion.h2>
        
        <motion.p className="contact-desc" variants={fadeUp}>
          Mình luôn sẵn sàng để kết nối với mọi người. Bất kể bạn có câu hỏi gì hay đơn giản chỉ là muốn giao lưu kết bạn, cứ thoải mái liên hệ với mình qua các kênh dưới đây nhé!
        </motion.p>

        <motion.div className="contact-info-cards" variants={fadeUp}>
          <div className="info-card">
            <FaEnvelope className="info-icon" />
            <p>duongnguyennhatquang@gmail.com</p>
          </div>
          <div className="info-card">
            <FaPhone className="info-icon" />
            <p>0787 808 010</p>
          </div>
        </motion.div>

        <motion.div className="contact-socials-large" variants={fadeUp}>
          <a href="https://github.com/nhatquang05-qz" target="_blank" rel="noreferrer"><FaGithub /></a>
          <a href="https://www.facebook.com/nhtqug.05/" target="_blank" rel="noreferrer"><FaFacebook /></a>
          <a href="https://www.linkedin.com/in/quang-dương-nguyễn-nhật-b5a9393aa/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
        </motion.div>

        <motion.div variants={fadeUp}>
          <a href="https://www.facebook.com/nhtqug.05/" target="_blank" rel="noreferrer" className="btn-primary contact-btn">
            Say Hello
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;