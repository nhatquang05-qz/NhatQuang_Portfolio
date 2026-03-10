import { motion, type Variants } from 'framer-motion';
import '../assets/styles/Projects.css';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
};

const Projects = () => {
  return (
    <section id="projects" className="section-container">
      <motion.h2 
        className="section-title"
        variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
      >
        Dự Án Tâm Huyết
      </motion.h2>

      <motion.div 
        className="project-showcase"
        variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
      >
        <div className="project-info">
          <h3>StoryVerse</h3>
          <p>
            Hệ sinh thái Đọc truyện và Mạng xã hội toàn diện. Một project Full-Stack được xây dựng độc lập hoàn toàn từ Database, Backend APIs cho đến Giao diện Frontend.
          </p>
          <ul className="feature-list">
            <li>Hệ thống E-commerce: Quản lý giỏ hàng, đặt truyện vật lý, nạp xu và thanh toán.</li>
            <li>Tính năng Tương tác: Chat realtime, bình luận, đánh giá (Review), diễn đàn cộng đồng.</li>
            <li>Marketing Tool: Hệ thống Flash Sale đếm ngược, mã giảm giá (Voucher/Giftcode).</li>
            <li>Mở rộng: Tích hợp AI Chatbot hỗ trợ người dùng, hệ thống Nhiệm vụ (Quests) và Minigames.</li>
          </ul>
          <div className="tech-tags">
            <span>ReactJS</span>
            <span>Node.js</span>
            <span>MongoDB</span>
            <span>Express</span>
            <span>Socket.io</span>
          </div>
        </div>
        <div className="project-img-wrapper">
           <img 
            src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop" 
            alt="StoryVerse Project" 
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;