import arrow from '../assets/arrow.svg';

export function FeaturedGamesSection(sectionTitle) {
  return(
    <div className="featured-games-main" id='featured-games-section'>
        <div className="featured-games-flex">
          <div className="featured-title">Featured Games</div>

          <div className="featured-view-con">
            <div className="featured-view-list">View All</div>
            <img src={arrow} alt="Arrow pointing right" className='featured-view-arrow' />
          </div>
        </div>
      </div>
  );
}