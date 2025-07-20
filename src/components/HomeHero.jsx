import landingBg from "../assets/landingBg.jpg";
import play from "../assets/play.svg";
import crown from "../assets/crown.svg";

export function HomeHero() {
  return (
    <main className="home-main" id="home-main">
      <div className="home-landing-image">
        <img src={landingBg} alt="GameVault" className="home-landing-image" />
      </div>

      <div className="home-landing-con">
        <div className="landing-title">Your Ultimate 
          <span className="landing-title-span"> Gaming Library</span>
        </div>
        <div className="landing-text">Discover, collect, and play thousands of games across all genres. From indie gems to AAA blockbusters, GameVault has everything you need.</div>

        <div className="landing-buttons-con">
          <button className="landing-button-explore-list">
            <img src={play} alt="Play" className="landing-button-icon" />
            Explore Library
          </button>

          <button className="landing-button-join-list">
            <img src={crown} alt="Join" className="landing-button-icon-join" />
            Join Premium
          </button>
        </div>
      </div>


    </main>
  );
}