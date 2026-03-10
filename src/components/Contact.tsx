import { motion, type Variants } from 'framer-motion';
import '../assets/styles/Contact.css';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
};

const Contact = () => {
  return (
    <section id="contact" className="section-container">
      <motion.div 
        className="contact-wrapper"
        variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
      >
        <p className="contact-subtitle">What's Next?</p>
        <h2 className="contact-title">Get In Touch</h2>
        <p className="contact-desc">
         Mình luôn sẵn sàng để kết nối với mọi người. Bất kể bạn có câu hỏi gì hoặc muốn kết bạn cứ liên hệ mình!
        </p>
        <a href="mailto:duongnguyennhatquang@gmail.com" className="btn-primary contact-btn">
          Say Hello
        </a>
      </motion.div>
    </section>
  );
};

export default Contact;