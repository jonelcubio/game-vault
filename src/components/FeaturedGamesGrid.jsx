import { useEffect, useState } from 'react';
import games from '../data/games.js';
import cart from '../assets/cart.svg';
import star from '../assets/star.svg';


export function FeaturedGamesGrid() {

  const [randomFeatured, setRandomFeatured] = useState([]);
  
    // Function to pick 3 random games //
    const getRandomGames = () => {
      const shuffled = [...games].sort(() => 0.5 - Math.random());
      return shuffled.slice(0, 5);
    }
  
    // Update on mount and refresh
    useEffect(() => {
      setRandomFeatured(getRandomGames());
    },[])

  return(
    <div className="featured-games-main">
          <div className="featured-games-con">
            {randomFeatured.map(game => (
            <div className="featured-games-list" key="game.id">

              <div className="featured-games-img">
                <img src={game.image} alt={game.title} className='featured-game-image-file' loading='lazy' title={game.title}/>
              </div>

              <div className="featured-games-title" title={game.title}>{game.title}</div>
              <div className="featured-games-genre">{game.genre}</div>

              <div className="featured-games-buttons-con">
                <button className="featured-game-view-game">
                  <img src={star} alt={game.title} className='featured-game-about' />View Game
                </button>

                <button className="featured-game-add-game">
                  <img src={cart} alt={game.title} className='featured-game-add' /> Add to Cart
                </button>
              </div>

            </div>
          ))}
          </div>
        </div>

  );
}