const Header = () => {
  return (
    <nav>
      <ul className="all-nav-items">
        <li>
          <i class="fas fa-bars"></i>
        </li>
        <li className="nav-items">
          <a href="#home">Home</a>
        </li>
        <li className="nav-items">
          <a href="#projects">Projects</a>
        </li>
        <li className="nav-items">
          <a href="#skills">Skills</a>
        </li>
      </ul>
    </nav>
  );
};
export default Header;
