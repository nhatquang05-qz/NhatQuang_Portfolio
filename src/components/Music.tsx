import { useState } from 'react';
import '../assets/styles/Music.css';

const Music = () => {
  const [activePlaylist, setActivePlaylist] = useState<string>('sleep');

  const playlists = {
    sleep: {
      id: 'sleep',
      title: 'Sleep & Relax',
      desc: 'Nhẹ nhàng, êm ái. List nhạc này giúp mình xả stress và dễ dàng chìm vào giấc ngủ sau một ngày dài.',
      embedUrl: 'https://open.spotify.com/embed/playlist/2ayjZWXn2InxRp5lJESfRT?utm_source=generator&theme=0'
    },
    sad: {
      id: 'sad',
      title: 'Sad & Deep',
      desc: 'Dành cho những ngày mưa hoặc khi tâm trạng trùng xuống. Những bài hát xoa dịu tâm hồn.',
      embedUrl: 'https://open.spotify.com/embed/playlist/0JVNoNv3tKFdKZUqmiJxKR?si=52ce04a83c5c49ef&utm_source=generator&theme=0'
    },
    english: {
      id: 'english',
      title: 'Eng',
      desc: 'Tuyển tập những bản hit tiếng Anh mình replay nhiều nhất',
      embedUrl: 'https://open.spotify.com/embed/playlist/482xEaYS7jOTaPv0mRt68z?si=ca60dc602a82443c&utm_source=generator&theme=0'
    }
  };

  const currentList = playlists[activePlaylist as keyof typeof playlists];

  return (
    <section id="music" className="section-container music-wrapper">
      <h2 className="section-title"><span>🎵</span> My Playlists</h2>

      <div className="music-container">
        
        <div className="music-sidebar">
          {Object.values(playlists).map((list) => (
            <div
              key={list.id}
              className={`music-menu-item ${activePlaylist === list.id ? 'active' : ''}`}
              onClick={() => setActivePlaylist(list.id)}
            >
              <div className="music-menu-info">
                <h4 className="music-menu-title">{list.title}</h4>
              </div>
            </div>
          ))}
        </div>
          
        <div className="music-main-content">
          <div className="music-header">
            <div className="music-main-details">
              <h3 className="music-main-title">{currentList.title}</h3>
              <p className="music-main-desc">{currentList.desc}</p>
            </div>
          </div>

          <div className="music-player-container">
            <iframe
              src={currentList.embedUrl}
              width="100%"
              height="700"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              className="music-iframe"
            ></iframe>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Music;