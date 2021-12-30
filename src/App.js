import React,{useEffect,useState} from 'react';
import './index.css';
import Header from './Header';
import Recipe from './Recipe';
import Carousel from 'react-elastic-carousel';


const App = () => {
const APP_ID = "bc70de85";
const APP_KEY = "0286ef881abb52d1bf523f9975c2cd7b"; //public API-free//
const [recipes,setRecipes] = useState ([]);
const [search,setSearch]=useState ('');
const [query,setQuery] = useState("chicken");


  
useEffect(()=>{
getReciepes();
},[query]);  
const getReciepes = async () => {
const response = await fetch (`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
const data = await response.json();
setRecipes(data.hits);
console.log(data.hits);
}

function updatesearch(e) {
  setSearch(e.target.value);

}

const getSearch = e => {
e.preventDefault();
setQuery(search);
setSearch('');
}


return (
<div className = "App">
<Header/>

<form onSubmit = {getSearch} className="search-form">
<input className = "search-bar" 
type ="text" value={search} 
onChange={updatesearch}/>
<button className= "search-button" 
type = "submit">Search</button>
</form>

<div className = "foodIngredients">
  <Carousel>
{recipes.map(recipe =>(
<Recipe
key={recipe.recipe.label }
title={recipe.recipe.label} 
calories={recipe.recipe.calories}
image = {recipe.recipe.image}
ingredients = {recipe.recipe.ingredients}
/>
))}
</Carousel>
</div>
    </div>
  )
}

export default App;
