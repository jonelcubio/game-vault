import icon from '../assets/icon.svg';
import search from '../assets/search.svg';
import person from '../assets/person.svg';

export function Navbar() {

  console.log("Navbar component rendered");


  return (
    <main className="navbar-main">
      <div className="navbar-brand-con">
        <img src={icon} alt="GameVault Logo" className='navbar-brand-icon' />
        <div className="navbar-brand-title">GameVault</div>
      </div>

      <div className="navbar-links-con">
        <div className="navbar-links">Home</div>
        <div className="navbar-links">Library</div>
        <div className="navbar-links">Featured</div>
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
