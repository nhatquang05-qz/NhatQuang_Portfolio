import '../assets/styles/Billiards.css';

import mainHighlightVid from '../assets/videos/vid-main.mp4';
import bidaVid1 from '../assets/videos/vid1.mp4';
import bidaVid2 from '../assets/videos/vid2.mp4';
import bidaVid3 from '../assets/videos/vid3.mp4';
import bidaVid4 from '../assets/videos/vid4.mp4';

import cabinetImg from '../assets/images/bida-cue.jpg';

const Billiards = () => {
  return (
    <section id="billiards" className="section-container billiards-wrapper">
      <h2 className="section-title"><span>🎱</span> Pool Life</h2>
      
      <div className="billiards-container">
        
        <div className="billiards-main-content">
          <div className="billiards-description-box">
            <h3 className="billiards-sub-title">Phong Cách Chơi</h3>
            <p className="billiards-text">Mình đam mê bộ môn Pool, thường xuyên tập luyện và thi đấu các thể loại 8, 9 và 10 bi. Bida rèn luyện cho mình sự điềm tĩnh, tính toán chi tiết và khả năng chịu áp lực.</p>
          </div>

          <div className="billiards-video-box">
            <video src={mainHighlightVid} autoPlay loop muted playsInline className="billiards-video"></video>
            <div className="billiards-video-label">Highlight Moments</div>
          </div>

          <div className="billiards-gallery-grid">
            <video src={bidaVid1} controls muted className="billiards-gallery-vid"></video>
            <video src={bidaVid2} controls muted className="billiards-gallery-vid"></video>
            <video src={bidaVid3} controls muted className="billiards-gallery-vid"></video>
            <video src={bidaVid4} controls muted className="billiards-gallery-vid"></video>
          </div>
        </div>

        <div className="billiards-sidebar">
          <div className="billiards-cabinet">
            <div className="cabinet-header">
              <h4>Tủ Chứa Cơ</h4>
            </div>
            <div className="cabinet-body-single">
              <img src={cabinetImg} alt="Bộ Cơ Bida" className="cabinet-single-img" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Billiards;