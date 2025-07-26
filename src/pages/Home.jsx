import { HomeHero } from '../components/HomeHero.jsx';
import { FeaturedGamesSection } from '../components/FeaturedGamesSection.jsx';
import { FeaturedGamesGrid } from '../components/FeaturedGamesGrid.jsx';
import { GameLibrarySection } from '../components/GameLibrarySection.jsx';
import { GameLibraryFilter } from '../components/GameLibraryFilter.jsx';
import { GameLibraryGrid } from '../components/GameLibraryGrid.jsx';

export function Home() {

  

  return (
    <main className="home-main">
      <HomeHero />
      <FeaturedGamesSection />
      <FeaturedGamesGrid />
      <GameLibrarySection />
      <GameLibraryFilter />
      <GameLibraryGrid />
      <>
      
      </>
    </main>
  );
}