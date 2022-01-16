const Header = () => {
  return (
    <nav className="nav-container">
      <i class="fas fa-bars"></i>
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
    </nav>
  );
};
export default Header;
