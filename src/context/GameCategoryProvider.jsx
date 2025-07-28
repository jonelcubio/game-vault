import { createContext, useState, useContext } from 'react';

// Creating a context for game categories
// This will allow us to manage the selected game category across components
const GameCategoryContext = createContext();

// Creating a provider for the game category context.
export default function GameCategoryProvider({ children }) {

  const [selectedCategoryContext, setSelectedCategoryContext] = useState("allCategories");

  return(
    // Providing the selectedCategory and setSelectedCategory to the context
    <GameCategoryContext.Provider value={{ selectedCategoryContext, setSelectedCategoryContext }}>
      {children}
    </GameCategoryContext.Provider>
  );
}

// Creating a custom hook to access the game category context.
export function useGameCategoryContext(){
  return useContext(GameCategoryContext);
}