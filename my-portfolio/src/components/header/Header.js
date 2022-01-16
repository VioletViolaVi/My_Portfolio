const Header = () => {
  return (
    <header className="nav-container">
      <ul className="all-nav-items">
        <li className="nav-items">
          <a href="#home" className="nav-link">
            Home
          </a>
        </li>
        <li className="nav-items">
          <a href="#projects" className="nav-link">
            Projects
          </a>
        </li>
        <li className="nav-items">
          <a href="#skills" className="nav-link">
            Skills
          </a>
        </li>
      </ul>
    </header>
  );
};
export default Header;
