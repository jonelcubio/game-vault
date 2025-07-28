import { lazy, Suspense } from 'react';
import { HomeHero } from '../components/HomeHero.jsx';
import { FeaturedGamesSection } from '../components/FeaturedGamesSection.jsx';
import { FeaturedGamesGrid } from '../components/FeaturedGamesGrid.jsx';
import { GameLibrarySection } from '../components/GameLibrarySection.jsx';
import { GameLibraryFilter } from '../components/GameLibraryFilter.jsx';

// It turns out that the export function needs to be default to work.
import  GameLibraryGrid from '../components/GameLibraryGrid.jsx';

// Lazy loading GameLibraryGrid component
// This allows the component to be loaded only when it is needed, improving initial load time.
const LazyGameLibraryGrid = lazy(() => import('../components/GameLibraryGrid.jsx'));
console.log("LazyGameLibraryGrid component loaded");

export function Home() {

  

  return (
    <main className="home-main">
      <HomeHero />
      <FeaturedGamesSection />
      <FeaturedGamesGrid />
      <GameLibrarySection />
      <GameLibraryFilter />
      <Suspense fallback={<div>Loading...</div>}>
        <LazyGameLibraryGrid />
      </Suspense>
      <>
      
      </>
    </main>
  );
}