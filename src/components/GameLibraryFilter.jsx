import search from "../assets/search.svg";
import games from "../data/games";
import { useGameCategoryContext } from "../context/GameCategoryProvider";
// Importing the useGameCategoryContext to access the selected category from the context
import { useState } from "react";

export function GameLibraryFilter() {

  const [selectedCategory, setSelectedCategory] = useState("allCategories");
  const [isLoading, setIsLoading] = useState(false);
  const {setSelectedCategoryContext} = useGameCategoryContext();
  // Using the context to set the selected category

  function handleCategoryChange(e) {
    setIsLoading(true);
    setSelectedCategory(e.target.value);
    setTimeout(() => setIsLoading(false), 500);
    // Here you can add logic to filter the game library based on the selected category
    console.log("Selected Category:", e.target.value);
  }

  function filterCategory(games) {
    if (selectedCategory === 'allCategories') {
      console.log("All categories selected");
      console.error(Error);
      return games;
      
    }
    console.log(`Filtered games by category: ${selectedCategory}`);
    return games.filter(game => game.genre === selectedCategory);
  }

  const filteredCategory = filterCategory(games)

  // This component provides a filter for the game library, allowing users to search and filter games by category and price.
  return(
    <main className="gameLibraryFilter-main">
      <div className="gamelibraryfilter-con">

        <div className="gamelibraryfilter-search-con">
          <img src={search} alt="Search for games..." className="gamelibraryfilter-search-icon" />
          <input type="text" name="Search for games" placeholder="Search for games..." className="gamelibrary-input" />
        </div>

        <div className="gamelibraryfilter-category-con">
          <select 
          name="gamelibrary-dropdown" 
          id="gamelibrary-dropdown" 
          value={selectedCategory} 
          onChange={handleCategoryChange} 
          className="gamelibrary-category">
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
          <select name="gamelibrary-price" className="gamelibrary-price" id="gamelibrary-dropdown">
            <option value="price-all" className="gamelibrary-option">Price: All</option>
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