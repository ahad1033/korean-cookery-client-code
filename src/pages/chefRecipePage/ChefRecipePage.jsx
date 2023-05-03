import React from 'react';
import Header from '../shared/header/Header';
import { useLoaderData } from 'react-router-dom';
import RecipeDetails from '../recipeDetails/RecipeDetails';
import { Button, Card } from 'react-bootstrap';

const ChefRecipePage = () => {

    const recipe = useLoaderData();

    // const { recipe_id, recipe_name, ingredients, cooking_method, ratings, recipe_img } = recipe.recipe;
    

    return (
        <div>
            <Header />

            <h1>total recipe: {recipe.recipe.length}</h1>
            

            {
                recipe.recipe.map(r => <RecipeDetails
                    key={r.recipe_id}
                    recipe={recipe}
                ></RecipeDetails>)
            }

        </div>
    );
};

export default ChefRecipePage;