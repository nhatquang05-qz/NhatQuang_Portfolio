import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact'; 
import Gaming from './components/Gaming';
import Billiards from './components/Billiards';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [currentTab, setCurrentTab] = useState('home');

  useEffect(() => {
    const timeout = setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }, 50);

    return () => clearTimeout(timeout);
  }, [currentTab]);

  return (
    <div className="portfolio-app">
      <div className="bg-animated">
        <div className="bg-glow glow-1"></div>
        <div className="bg-glow glow-2"></div>
        <div className="bg-glow glow-3"></div>
      </div>
      
      <Navbar setCurrentTab={setCurrentTab} currentTab={currentTab} />

      {currentTab !== 'home' && (
        <button className="back-to-home" onClick={() => setCurrentTab('home')}>
          ← Back to Desktop
        </button>
      )}

      {currentTab === 'home' && (
        <div className="desktop-environment">
          <Hero />
          <div className="desktop-icons">
            <div className="desktop-icon" onClick={() => setCurrentTab('about')}>
              <div className="icon-box">👨‍💻</div>
              <span>About</span>
            </div>
            <div className="desktop-icon" onClick={() => setCurrentTab('skills')}>
              <div className="icon-box">⚙️</div>
              <span>Skills</span>
            </div>
            <div className="desktop-icon" onClick={() => setCurrentTab('projects')}>
              <div className="icon-box">🚀</div>
              <span>Projects</span>
            </div>
            <div className="desktop-icon" onClick={() => setCurrentTab('contact')}>
              <div className="icon-box">📧</div>
              <span>Contact</span>
            </div>
            <div className="desktop-icon" onClick={() => setCurrentTab('gaming')}>
              <div className="icon-box">🎮</div>
              <span>Gaming</span>
            </div>
            <div className="desktop-icon" onClick={() => setCurrentTab('billiards')}>
              <div className="icon-box">🎱</div>
              <span>Billiards</span>
            </div>
          </div>
        </div>
      )}

      {currentTab === 'about' && <About />}
      {currentTab === 'skills' && <Skills />}
      {currentTab === 'projects' && <Projects />}
      {currentTab === 'contact' && <Contact />}
      {currentTab === 'gaming' && <Gaming />}
      {currentTab === 'billiards' && <Billiards />}

      <Footer />
    </div>
  );
}

export default App;