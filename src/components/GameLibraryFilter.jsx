import search from "../assets/search.svg";

export function GameLibraryFilter() {
  return(
    <main className="gameLibraryFilter-main">
      <div className="gamelibraryfilter-con">

        <div className="gamelibraryfilter-search-con">
          <img src={search} alt="Search for games..." className="gamelibraryfilter-search-icon" />
          <input type="text" name="Search for games" placeholder="Search for games..." className="gamelibrary-input" />
        </div>

        <div className="gamelibraryfilter-category-con">
          <select name="gamelibrary-dropdown" id="gamelibrary-dropdown">
            <option value="allCategories" className="gamelibrary-option">All Categories</option>
            <option value="action" className="gamelibrary-option">Action</option>
            <option value="adventure" className="gamelibrary-option">Adventure</option>
            <option value="rpg" className="gamelibrary-option">RPG</option>
            <option value="strategy" className="gamelibrary-option">Strategy</option>
            <option value="simulation" className="gamelibrary-option">Simulation</option>
            <option value="racing" className="gamelibrary-option">Racing</option>
            <option value="sports" className="gamelibrary-option">Sports</option>
            <option value="horror" className="gamelibrary-option">Horror</option>
          </select>
        </div>

        <div className="gamelibraryfilter-price">
          <select name="gamelibrary-price" className="gamelibrary-price">
            <option value="price-all" className="gamelibrary-option">Price:All</option>
            <option value="free" className="gamelibrary-option">Free</option>
            <option value="under-10" className="gamelibrary-option">Under $10</option>
            <option value="10-30" className="gamelibrary-option">$10 - $30</option>
            <option value="30more" className="gamelibrary-option">$30+</option>
          </select>
        </div>
      </div>
    </main>
  );
}