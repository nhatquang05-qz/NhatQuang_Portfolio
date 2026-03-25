import { useState, useEffect } from 'react'; 
import { FaGithub, FaFacebook, FaLinkedin } from 'react-icons/fa';
import '../assets/styles/Navbar.css';

interface NavbarProps {
  setCurrentTab: (tab: string) => void;
  currentTab: string;
}

const Navbar = ({ setCurrentTab, currentTab }: NavbarProps) => {
  const [displayText, setDisplayText] = useState('');
  const fullText = "Hi! I'm Quang";
  
  useEffect(() => {
    const typeEffect = () => {
      let i = 0;
      setDisplayText(''); 
      
      const typingInterval = setInterval(() => {
        if (i < fullText.length) {
          setDisplayText(fullText.substring(0, i + 1));
          i++;
        } else {
          clearInterval(typingInterval);
        }
      }, 150);
    };

    typeEffect();
    
    const repeatInterval = setInterval(() => {
      typeEffect();
    }, 10000); 

    return () => {
      clearInterval(repeatInterval);
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="logo" onClick={() => setCurrentTab('home')}>Quang.Dev</div>
      
      <ul className="nav-links">
        <li><a onClick={() => setCurrentTab('about')} style={{ color: currentTab === 'about' ? '#00f2fe' : '' }}>About</a></li>
        <li><a onClick={() => setCurrentTab('skills')} style={{ color: currentTab === 'skills' ? '#00f2fe' : '' }}>Skills</a></li>
        <li><a onClick={() => setCurrentTab('projects')} style={{ color: currentTab === 'projects' ? '#00f2fe' : '' }}>Projects</a></li>
        <li><a onClick={() => setCurrentTab('gaming')} style={{ color: currentTab === 'gaming' ? '#00f2fe' : '' }}>Gaming</a></li>
        <li><a onClick={() => setCurrentTab('billiards')} style={{ color: currentTab === 'billiards' ? '#00f2fe' : '' }}>Billiards</a></li>
        <li><a onClick={() => setCurrentTab('contact')} style={{ color: currentTab === 'contact' ? '#00f2fe' : '' }}>Contact</a></li>
      </ul>

      <div className="nav-socials">
        <a href="https://github.com/nhatquang05-qz" target="_blank" rel="noreferrer"><FaGithub /></a>
        <a href="https://www.facebook.com/nhtqug.05/" target="_blank" rel="noreferrer"><FaFacebook /></a>
        <a href="https://www.linkedin.com/in/quang-d%C6%B0%C6%A1ng-nguy%E1%BB%85n-nh%E1%BA%ADt-b5a9393aa/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
        
        <button className="nav-resume-btn">
          {displayText}
          <span className="cursor">|</span>
        </button>
      </div>
    </nav>
  );
}; 

export default Navbar;