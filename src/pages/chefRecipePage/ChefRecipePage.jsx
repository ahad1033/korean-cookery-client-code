import React from 'react';
import Header from '../shared/header/Header';
import { useLoaderData } from 'react-router-dom';
import RecipeDetails from '../recipeDetails/RecipeDetails';

const ChefRecipePage = () => {
    const recipe = useLoaderData();

    return (
        <>
            <Header />
            <div className='container text-center'>
                <h1 className='fs-1'>Total recipes: {recipe.recipe.length}</h1>
                {recipe.recipe.map((r) => (
                    <RecipeDetails
                        className='d-flex text-center'
                        key={r.recipe_id}
                        recipe={r}
                    ></RecipeDetails>
                ))}
            </div>
        </>
    );
};

export default ChefRecipePage;