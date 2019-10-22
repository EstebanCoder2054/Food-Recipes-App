import React from 'react';

const Recipe = ({title, calories, image, ingredients}) => {
    return(
        <div className="recipe">
            <h1>{title}</h1>
            {/* como los ingredientes son un arreglo hay que mapearlos */}
            <ul>
                {ingredients.map(ingredient => {
                    return(
                        <li key={ingredient.calories}>
                            {ingredient.text}
                        </li>
                    )
                })}
            </ul>
            <p>{calories}</p>
            <img className="image" src={image} alt="image" />
        </div>
    );
}

export default Recipe;