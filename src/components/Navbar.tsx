import { FaGithub, FaFacebook, FaLinkedin } from 'react-icons/fa';
import '../assets/styles/Navbar.css';

const Navbar = () => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar">
      <div className="logo" onClick={() => scrollTo('hero')}>Quang.Dev</div>
      
      <ul className="nav-links">
        <li><a onClick={() => scrollTo('about')}>About</a></li>
        <li><a onClick={() => scrollTo('skills')}>Skills</a></li>
        <li><a onClick={() => scrollTo('projects')}>Projects</a></li>
        <li><a onClick={() => scrollTo('contact')}>Contact</a></li>
      </ul>

      <div className="nav-socials">
        <a href="https://github.com/nhatquang05-qz" target="_blank" rel="noreferrer"><FaGithub /></a>
        <a href="https://www.facebook.com/nhtqug.05/" target="_blank" rel="noreferrer"><FaFacebook /></a>
        <a href="https://www.linkedin.com/in/quang-d%C6%B0%C6%A1ng-nguy%E1%BB%85n-nh%E1%BA%ADt-b5a9393aa/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
        <button className="nav-resume-btn">Hi! I'm Quang</button>
      </div>
    </nav>
  );
}; 

export default Navbar;