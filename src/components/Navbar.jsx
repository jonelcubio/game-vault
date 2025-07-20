
import icon from '../assets/icon.svg';
import search from '../assets/search.svg';
import person from '../assets/person.svg';

export function Navbar() {
  return (
    <main className="navbar-main">
      <a href="#home-main"><div className="navbar-brand-con">
        <img src={icon} alt="GameVault Logo" className='navbar-brand-icon' />
        <div className="navbar-brand-title">GameVault</div>
      </div></a>

      <div className="navbar-links-con">
        <a href="#home-main"><div className="navbar-links">Home</div></a>
        <a href="#game-library-main"><div className="navbar-links">Library</div></a>
        <a href="#featured-games-section"><div className="navbar-links">Featured</div></a>
        <div className="navbar-links">Categories</div>
      </div>

      <div className="navbar-space-con">&nbsp;</div>

      <div className="navbar-search-con">
        <div className="navbar-search">
          <img src={search} alt="Search games" className='navbar-search-icon'/>
          <input type="text" placeholder="Search games..." className='navbar-search-input' />
        </div>
      </div>

      <div className="navbar-user-con">
        <div className="navbar-user">
          <img src={person} alt="User profile" className='navbar-user-icon' />
          <div className="navbar-user-name">Login</div>
        </div>
      </div>

    </main>
  );
}
