import React from "react";

const Recipe = ({title,calories,image,ingredients}) => {

    return(

        <div className ="recipeBox">

            <div className="recipeTitle">
            <h1 >{title}</h1>
            </div>

            <div className="ingredients-part">
            <ol>
            {ingredients.map(ingredient => (
            <li> {ingredient.text}</li>
              ))}
            </ol>
            <p>{Math.round(calories * 100) / 100} Cal</p>
            </div>

            <div>
            <img className="image" src={image} alt="" />
            </div>
            
        </div> 
    ); 
};

export default Recipe;