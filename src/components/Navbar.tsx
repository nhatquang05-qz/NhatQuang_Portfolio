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
      <div className="logo" onClick={() => scrollTo('hero')}>Q.</div>
      <ul className="nav-links">
        <li><a onClick={() => scrollTo('about')}>About</a></li>
        <li><a onClick={() => scrollTo('skills')}>Skills</a></li>
        <li><a onClick={() => scrollTo('projects')}>Projects</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;