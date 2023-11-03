import './NavBar.scss'

const NavBar = () => {

  return (
    <nav id="navbar">
      <a className="navbar-item-inner flexbox">
        <img src="./src/assets/Fusion (1).png" alt="Logo" />
      </a>
      <ul>
        <li className="navbar-item flexbox-left">
          <a className="navbar-item-inner flexbox-left">
            <div className="navbar-item-inner-icon-wrapper flexbox">
              <ion-icon name="search-outline"></ion-icon>
            </div>
            <span className="link-text">Web Design</span>
          </a>
        </li>
        <li className="navbar-item flexbox-left">
          <a className="navbar-item-inner flexbox-left">
            <div className="navbar-item-inner-icon-wrapper flexbox">
              <ion-icon name="home-outline"></ion-icon>
            </div>
            <span className="link-text">Marketing</span>
          </a>
        </li>
        <li className="navbar-item flexbox-left">
          <a className="navbar-item-inner flexbox-left">
            <div className="navbar-item-inner-icon-wrapper flexbox">
              <ion-icon name="folder-open-outline"></ion-icon>
            </div>
            <span className="link-text">SEO</span>
          </a>
        </li>
        <li className="navbar-item flexbox-left">
          <a className="navbar-item-inner flexbox-left">
            <div className="navbar-item-inner-icon-wrapper flexbox">
              <ion-icon name="folder-open-outline"></ion-icon>
            </div>
            <span className="link-text">Contact</span>
          </a>
        </li>
        <li className="navbar-item flexbox-left">
          <a className="navbar-item-inner flexbox-left">
            <div className="navbar-item-inner-icon-wrapper flexbox"></div>
            <span className="link-text">About</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar