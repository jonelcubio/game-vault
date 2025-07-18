import { HomeHero } from '../components/HomeHero.jsx';
import { FeaturedGamesSection } from '../components/FeaturedGamesSection.jsx';

import { useEffect, useState } from 'react';
import games from '../data/games.js';

export function Home() {

  const [randomFeatured, setRandomFeatured] = useState([]);

  // Function to pick 3 random games //
  const getRandomGames = () => {
    const shuffled = [...games].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 5);
  }

  // Update on mount and refresh
  useEffect(() => {
    setRandomFeatured(getRandomGames());
    console.log("Rendered ramdom Featured games");
  },[])

  return (
    <main className="home-main">
      <HomeHero />
      <FeaturedGamesSection />
      <>
      <div className="featured-games-main">
          <div className="featured-games-con">
            {randomFeatured.map(game => (
            <div className="featured-games-list" key="game.id">

              <div className="featured-games-img">
                <img src={game.image} alt={game.title} className='featured-game-image-file' />
              </div>

                <div className="featured-games-title">{game.title}</div>
                <div className="featured-games-genre">{game.genre}</div>
                <div className="featured-games-text">{game.description}</div>

             
            </div>
          ))}
          </div>
        </div>
      </>
    </main>
  );
}