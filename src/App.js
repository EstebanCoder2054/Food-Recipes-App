import React, {useEffect, useState} from 'react';
import Recipe from './components/Recipe';
import './App.css';

const App = () => {
  
  const APP_ID = 'bf99c143';
  const APP_KEY = '3afc4a3015ddd465d3c03de3a7a1140d';
  
  //state
  const [recipes, setRecipes] = useState([]);
  const [searchWord, setSearchWord] = useState('');
  const [query, setQuery] = useState('')

  const consultarAPI = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits)
    console.log(data.hits);
  }

  useEffect(() => {
    consultarAPI();
  },[query]);

  const updateSearchWord = (e) => {
    setSearchWord(e.target.value);
    console.log(searchWord);
  }

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(searchWord);
    //poniendo de nuevo la barra de búsqueda en blanco
    setSearchWord('');
  }

  return(
    <div className="App">
      <form className="search-form" onSubmit={getSearch}> 
        <input className="search-bar"
         type="text"
         value={searchWord}
         onChange={updateSearchWord} 
         />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      <div className="recipes">
      {recipes.map(recipe => {
        return(
          <Recipe
            key={recipe.recipe.calories}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        )
      })}
      </div>
    </div>
  );
}

export default App;
