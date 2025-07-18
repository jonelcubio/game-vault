import { HomeHero } from '../components/HomeHero.jsx';
import { FeaturedGamesSection } from '../components/FeaturedGamesSection.jsx';
import { FeaturedGamesGrid } from '../components/FeaturedGamesGrid.jsx';


export function Home() {

  

  return (
    <main className="home-main">
      <HomeHero />
      <FeaturedGamesSection />
      <FeaturedGamesGrid />
      <>
      
      </>
    </main>
  );
}