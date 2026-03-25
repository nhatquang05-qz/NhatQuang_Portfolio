import { useState } from 'react';
import '../assets/styles/Gaming.css';

import lqCover from '../assets/images/lq.jpg';
import lqDetail1 from '../assets/images/lq1.jpg';
import lqDetail2 from '../assets/images/lq2.jpg';

import cocCover from '../assets/images/coc.jpg';
import cocDetail1 from '../assets/images/coc1.jpg';
import cocDetail2 from '../assets/images/coc2.jpg';

import nthCover from '../assets/images/nth.jpg';
import nthDetail1 from '../assets/images/nth1.png';
import nthDetail2 from '../assets/images/nth2.png';

const Gaming = () => {
  const [activeGame, setActiveGame] = useState<string | null>(null);

  const gamesData = {
    lienquan: {
      title: "Liên Quân Mobile",
      desc: "Ai chưa lên chiến tướng liên hệ mình kéo rank nha:))",
      coverImg: lqCover,
      detailImg1: lqDetail1,
      detailImg2: lqDetail2
    },
    coc: {
      title: "Clash of Clans",
      desc: "Chơi lâu nhưng hay chán game rồi bỏ 1 thời gian nên giờ bị out meta nhiều quá, giờ chỉ chơi cho vui thôi:')",
      coverImg: cocCover,
      detailImg1: cocDetail1,
      detailImg2: cocDetail2
    },
    nghichthuyhan: {
      title: "Nghịch Thủy Hàn",
      desc: "Đi cày cuốc trang viên với đi pve thui chứ không thích đánh nhau lắm:3",
      coverImg: nthCover,
      detailImg1: nthDetail1,
      detailImg2: nthDetail2
    }
  };

  return (
    <section id="gaming" className="section-container gaming-wrapper">
      
      {activeGame === null ? (
        <div className="gaming-main-view">
          <h2 className="section-title"><span>🎮</span> Gaming Hub</h2>
          <div className="gaming-grid">
            
            <div className="gaming-card" onClick={() => setActiveGame('lienquan')}>
              <div className="gaming-bg" style={{ backgroundImage: `url(${gamesData.lienquan.coverImg})` }}></div>
              <div className="gaming-info">
                <h3 className="gaming-title">{gamesData.lienquan.title}</h3>
              </div>
            </div>

            <div className="gaming-card" onClick={() => setActiveGame('coc')}>
              <div className="gaming-bg" style={{ backgroundImage: `url(${gamesData.coc.coverImg})` }}></div>
              <div className="gaming-info">
                <h3 className="gaming-title">{gamesData.coc.title}</h3>
              </div>
            </div>

            <div className="gaming-card" onClick={() => setActiveGame('nghichthuyhan')}>
              <div className="gaming-bg" style={{ backgroundImage: `url(${gamesData.nghichthuyhan.coverImg})` }}></div>
              <div className="gaming-info">
                <h3 className="gaming-title">{gamesData.nghichthuyhan.title}</h3>
              </div>
            </div>

          </div>
        </div>
      ) : (
        <div className="gaming-detail-view">
          <button className="gaming-back-btn" onClick={() => setActiveGame(null)}>
            ← Back to Games
          </button>
          
          <h2 className="gaming-detail-title">
            {activeGame === 'lienquan' && gamesData.lienquan.title}
            {activeGame === 'coc' && gamesData.coc.title}
            {activeGame === 'nghichthuyhan' && gamesData.nghichthuyhan.title}
          </h2>
          
          <p className="gaming-detail-desc">
            {activeGame === 'lienquan' && gamesData.lienquan.desc}
            {activeGame === 'coc' && gamesData.coc.desc}
            {activeGame === 'nghichthuyhan' && gamesData.nghichthuyhan.desc}
          </p>

          <div className="gaming-detail-gallery">
            <img 
              src={
                activeGame === 'lienquan' ? gamesData.lienquan.detailImg1 : 
                activeGame === 'coc' ? gamesData.coc.detailImg1 : 
                gamesData.nghichthuyhan.detailImg1
              } 
              alt="Detail 1" 
              className="gaming-detail-img" 
            />
            <img 
              src={
                activeGame === 'lienquan' ? gamesData.lienquan.detailImg2 : 
                activeGame === 'coc' ? gamesData.coc.detailImg2 : 
                gamesData.nghichthuyhan.detailImg2
              } 
              alt="Detail 2" 
              className="gaming-detail-img" 
            />
          </div>
        </div>
      )}

    </section>
  );
};

export default Gaming;