import gameLibraryImages from "../data/gameLibraryImages";
import star from '../assets/star.svg';
import cart from '../assets/cart.svg';

export default function GameLibraryGrid() {
  return (
   <main className="gamelibrarygrid-main">
    <div className="gamelibrarygrid-con">
      {gameLibraryImages.map((game) => (
        <div key={game.id} className="gamelibrarygrid-item">
          <img src={game.img} alt={game.title}  className="gamelibrarygrid-image" loading='lazy' title={game.title}/>
          <div className="gamelibrary-title">{game.title}</div>
          <div className="gamelibrary-genre">{game.genre}</div>

        <div className="gamelibrary-buttons-con">
            <button className="featured-game-view-game">
              <img src={star} alt={game.title} className='featured-game-about' />View Game
            </button>

            <button className="featured-game-add-game">
              <img src={cart} alt={game.title} className='featured-game-add' /> Add to Cart
            </button>
        </div>
        
        </div>
      ))}

        <div className="gamelibrarybbuttons-con">
          <button className="gamelibrarybbutton-load">Load More Games</button>
        </div>
    </div>
   </main>
  );
}